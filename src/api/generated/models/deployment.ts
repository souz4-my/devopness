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


import { Action } from './action';
import { Commit } from './commit';
import { DeploymentStep } from './deployment-step';
import { User } from './user';

/**
 * 
 * @export
 * @interface Deployment
 */
export interface Deployment {
    /**
     * Current status of the deployment
     * @type {string}
     * @memberof Deployment
     */
    status: DeploymentStatusEnum;
    /**
     * The deployment type
     * @type {string}
     * @memberof Deployment
     */
    type: DeploymentTypeEnum;
    /**
     * Source/channel from which the deployment has been triggered
     * @type {string}
     * @memberof Deployment
     */
    source: DeploymentSourceEnum;
    /**
     * The date and time when the action started to be executed (left the `pending/waiting` status)
     * @type {string}
     * @memberof Deployment
     */
    started_at?: string;
    /**
     * The date and time when the action has finished execution
     * @type {string}
     * @memberof Deployment
     */
    completed_at?: string;
    /**
     * The list of actions related to the deployment
     * @type {Array<Action>}
     * @memberof Deployment
     */
    actions?: Array<Action>;
    /**
     * 
     * @type {Commit}
     * @memberof Deployment
     */
    commit: Commit;
    /**
     * The steps that were meant to be executed when the deployment was triggered
     * @type {Array<DeploymentStep>}
     * @memberof Deployment
     */
    steps: Array<DeploymentStep>;
    /**
     * 
     * @type {User}
     * @memberof Deployment
     */
    triggered_by_user?: User;
}

/**
    * @export
    * @enum {string}
    */
export enum DeploymentStatusEnum {
    Pending = 'pending',
    InProgress = 'in-progress',
    Cancelled = 'cancelled',
    Successful = 'successful',
    Failed = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum DeploymentTypeEnum {
    Deploy = 'deploy',
    Redeploy = 'redeploy',
    Rollback = 'rollback'
}
/**
    * @export
    * @enum {string}
    */
export enum DeploymentSourceEnum {
    Manual = 'manual',
    GitPush = 'git-push',
    Scheduled = 'scheduled'
}

