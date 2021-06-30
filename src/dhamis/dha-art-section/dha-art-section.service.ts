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
  constructor(private connection: Connection) { }
  async getHccRegistration(
    yearQuarterId: number,
  ): Promise<dhaArtSelectionResolutes[]> {
    return this.connection.query(`SELECT
	CONCAT(code_year_quarter. [year], 'Q', code_year_quarter.quarter) AS quarter,
	code_hdepartment.hfacility_id,
	(
		SELECT
			concept.concept_name
		FROM
			concept
		WHERE
			concept.ID = obs.data_element) AS concept_name, obs.data_value, (CAST(obs.data_element AS VARCHAR) + '-' + LOWER(
			LEFT((
				SELECT
					concept.concept_name FROM concept
				WHERE
					concept.ID = obs_dimensions.period_report), 1))) AS product_code
	FROM
		code_year_quarter
		INNER JOIN (((code_hdepartment
					INNER JOIN code_hfacility ON code_hdepartment.hfacility_id = code_hfacility.ID)
				INNER JOIN ((art_clinic_obs
						INNER JOIN obs_dimensions ON art_clinic_obs.ID = obs_dimensions.art_clinic_obs_id)
					INNER JOIN obs ON obs_dimensions.ID = obs.obs_dimensions_ID) ON code_hdepartment.ID = art_clinic_obs.hdepartment_id)
			INNER JOIN concept_set ON obs.data_element = concept_set.concept_ID_member) ON code_year_quarter.ID = art_clinic_obs.year_quarter_id
	WHERE (((obs_dimensions.period_report)
			In(393, 394))
		AND((obs_dimensions.sub_group) = 398)
		AND((concept_set.concept_ID_set) = 1674)
		AND((art_clinic_obs.year_quarter_id) = ${yearQuarterId})
ORDER BY
	product_code`);

    //this.query(HCC_REGISTRATION, yearQuarterId);
  }

  async getArtRegistration(
    yearQuarterId: number,
  ): Promise<dhaArtSelectionResolutes[]> {
    return this.query(ART_REGISTRATION_CONCEPT_ID_SET, yearQuarterId);
  }

  async getArtOutcomesPrimarySecondary(
    yearQuarterId: number,
  ): Promise<dhaArtSelectionResolutes[]> {
    return this.query(OUTCOMES_PRIMARY_SECONDARY, yearQuarterId);
  }

  private async query(conceptIdSet: number, yearQuarterId: number) {
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
        ORDER BY product_code`);
  }
}
