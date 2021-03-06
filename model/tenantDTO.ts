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


export interface TenantDTO { 
    id?: string | null;
    name?: string;
    status?: TenantStatusDto;
    onboardingDate?: string | null;
    customerNumber?: string;
    contactName?: string;
    contactEmail?: string;
    location?: string;
    createdBy?: string;
    created?: string | null;
    changedBy?: string;
    changed?: string | null;
}

