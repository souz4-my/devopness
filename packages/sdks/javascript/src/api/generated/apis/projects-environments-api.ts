/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { ApiError } from '../../generated/models';
import { Environment } from '../../generated/models';
import { EnvironmentProjectCreate } from '../../generated/models';
import { EnvironmentRelation } from '../../generated/models';

/**
 * ProjectsEnvironmentsApiService - Auto-generated
 */
export class ProjectsEnvironmentsApiService extends ApiBaseService {
    /**
     * 
     * @summary Create a new environment on the current project
     * @param {number} projectId The ID of the project.
     * @param {EnvironmentProjectCreate} environmentProjectCreate A JSON object containing the resource data
     */
    public async addProjectEnvironment(projectId: number, environmentProjectCreate: EnvironmentProjectCreate): Promise<ApiResponse<Environment>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'addProjectEnvironment');
        }
        if (environmentProjectCreate === null || environmentProjectCreate === undefined) {
            throw new ArgumentNullException('environmentProjectCreate', 'addProjectEnvironment');
        }
        
        let queryString = '';

        const requestUrl = '/projects/{project_id}/environments' + (queryString? `?${queryString}` : '');

        const response = await this.post <Environment, EnvironmentProjectCreate>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), environmentProjectCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all environments belonging to a project
     * @param {number} projectId The ID of the project.
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listProjectEnvironments(projectId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<EnvironmentRelation>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectEnvironments');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/projects/{project_id}/environments' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<EnvironmentRelation>>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }
}