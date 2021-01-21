export interface HivCareClinicDto {
    description: string;
    'reporting-period': string;
    facilities: Facility[];
}

export interface Facility {
    'facility-code': string;
    values: Value[];
}

export interface Value {
    'product-code': string;
    value: number;
}
