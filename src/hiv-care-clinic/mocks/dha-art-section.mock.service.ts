import { Injectable } from '@nestjs/common';
import { HccRegistration } from '../../common/interfaces/hcc-registration';
import * as faker from 'faker';
import { moqHccRegistrationData } from './dha-art-section.mock.data';

@Injectable()
export class MoqDhaArtSectionService {
  async getHccRegistration(
    yearQuarterId: number,
    facilityId: number,
  ): Promise<HccRegistration[]> {
    const moqs = moqHccRegistrationData
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
  ): Promise<HccRegistration[]> {
    return [];
  }

  async getArtOutcomesPrimarySecondary(
    yearQuarterId: number,
    facilityId: number,
  ): Promise<HccRegistration[]> {
    const moqs = moqHccRegistrationData
      .map((moq) => ({
        ...moq,
        quarter: yearQuarterId,
      }))
      .filter((moq) => moq.hfacility_id === facilityId);
    return moqs;
  }
}
