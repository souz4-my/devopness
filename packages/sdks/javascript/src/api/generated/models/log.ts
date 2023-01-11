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


import { ServerActionLogStep } from './server-action-log-step';
import { ServerRelation } from './server-relation';

/**
 * 
 * @export
 * @interface Log
 */
export interface Log {
    /**
     * 
     * @type {ServerRelation}
     * @memberof Log
     */
    server: ServerRelation | null;
    /**
     * 
     * @type {ServerActionLogStep}
     * @memberof Log
     */
    step: ServerActionLogStep | null;
    /**
     * The date and time when the requested log record was last updated
     * @type {string}
     * @memberof Log
     */
    updated_at: string | null;
}
