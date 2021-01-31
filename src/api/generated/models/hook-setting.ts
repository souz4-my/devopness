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


import { HookVariable } from './hook-variable';

/**
 * Settings to a incoming hook
 * @export
 * @interface HookSetting
 */
export interface HookSetting {
    /**
     * List of variables to incoming hook
     * @type {Array<HookVariable>}
     * @memberof HookSetting
     */
    variables?: Array<HookVariable>;
}
