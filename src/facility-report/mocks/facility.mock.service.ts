import { Facility } from '../../dhamis/facility/facility.service';
import { mockHccRegistrationData } from './dha-art-section.mock.data';

export class MockFacilityService {
  async getAllFacilities() {
    return mockHccRegistrationData.map<Facility>((data) => ({
      ID: data.hfacility_id,
      Site_code: '',
      hfacility_name: '',
    }));
  }
}
