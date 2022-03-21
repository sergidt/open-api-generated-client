/**
 * Master Tenant-Management API
 * A web API to create tenants
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TenantStatusDto } from './tenantStatusDto';


export interface UpdateTenantCommand { 
    id?: string;
    name?: string;
    status?: TenantStatusDto;
    customerNumber?: string;
    contactName?: string;
    contactEmail?: string;
    location?: string | null;
}

