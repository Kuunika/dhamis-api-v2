import { Injectable } from '@nestjs/common';
import { dhaArtSelectionResolutes } from '../../common/interfaces/hcc-registration';
import { mockHccRegistrationData } from './dha-art-section.mock.data';

@Injectable()
export class MockDhaArtSectionService {
  async getHccRegistration(
    yearQuarterId: number,
    facilityId: number,
  ): Promise<dhaArtSelectionResolutes[]> {
    const moqs = mockHccRegistrationData
      .map((moq) => ({
        ...moq,
        quarter: yearQuarterId,
      }))
      .filter((moq) => moq.hfacility_id === facilityId);
    return moqs;
  }

  async getArtRegistration(
    yearQuarterId: number,
    facilityId: number,
  ): Promise<dhaArtSelectionResolutes[]> {
    const moqs = mockHccRegistrationData
      .map((moq) => ({
        ...moq,
        quarter: yearQuarterId,
      }))
      .filter((moq) => moq.hfacility_id === facilityId);
    return moqs;
  }

  async getArtOutcomesPrimarySecondary(
    yearQuarterId: number,
    facilityId: number,
  ): Promise<dhaArtSelectionResolutes[]> {
    const moqs = mockHccRegistrationData
      .map((moq) => ({
        ...moq,
        quarter: yearQuarterId,
      }))
      .filter((moq) => moq.hfacility_id === facilityId);
    return moqs;
  }
}
