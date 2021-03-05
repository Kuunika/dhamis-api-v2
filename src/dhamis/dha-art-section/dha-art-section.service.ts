import { Injectable } from '@nestjs/common';
import { dhaArtSelectionResolutes } from '../../common/interfaces/hcc-registration';
import { Connection } from 'typeorm';
import {
  ART_REGISTRATION_CONCEPT_ID_SET,
  HCC_REGISTRATION,
  OUTCOMES_PRIMARY_SECONDARY,
} from '../../common/constants/sql-query.constants';

@Injectable()
export class DhaArtSectionService {
  constructor(private connection: Connection) {}
  async getHccRegistration(
    yearQuarterId: number,
    facilityIds: number[],
  ): Promise<dhaArtSelectionResolutes[]> {
    return this.query(HCC_REGISTRATION, yearQuarterId, facilityIds);
  }

  async getArtRegistration(
    yearQuarterId: number,
    facilityIds: number[],
  ): Promise<dhaArtSelectionResolutes[]> {
    return this.query(
      ART_REGISTRATION_CONCEPT_ID_SET,
      yearQuarterId,
      facilityIds,
    );
  }

  async getArtOutcomesPrimarySecondary(
    yearQuarterId: number,
    facilityIds: number[],
  ): Promise<dhaArtSelectionResolutes[]> {
    return this.query(OUTCOMES_PRIMARY_SECONDARY, yearQuarterId, facilityIds);
  }

  private async query(
    conceptIdSet: number,
    yearQuarterId: number,
    facilityIds: number[],
  ) {
    return this.connection.query(`SELECT      
    CONCAT (code_year_quarter.[year], 'Q', code_year_quarter.quarter) AS quarter,          
    code_hdepartment.hfacility_id,     
    (SELECT concept.concept_name FROM concept WHERE concept.ID = obs.data_element) AS concept_name,
    data_value,         
    (CAST(obs.data_element AS VARCHAR) +'-'+ LOWER(LEFT(
    (SELECT concept.concept_name FROM concept WHERE concept.ID = obs_dimensions.period_report), 1))) AS product_code
      FROM obs 
        INNER JOIN concept_set ON obs.data_element = concept_set.concept_ID_member
        LEFT JOIN obs_dimensions ON obs_dimensions.ID = obs.obs_dimensions_ID 
        LEFT JOIN art_clinic_obs ON art_clinic_obs.ID = obs_dimensions.art_clinic_obs_id  
        LEFT JOIN code_hdepartment ON code_hdepartment.ID = art_clinic_obs.hdepartment_id 
        LEFT JOIN code_year_quarter ON code_year_quarter.ID = art_clinic_obs.year_quarter_id  
        WHERE concept_set.concept_ID_set = ${conceptIdSet} 
        AND art_clinic_obs.year_quarter_id = ${yearQuarterId} 
        AND code_hdepartment.hfacility_id IN(${facilityIds.join(',')}) 
        ORDER BY product_code`);
  }
}
