/***************************************************** COPYRIGHT *******************************************************
*                                                                                                                      *
* Copyright 2021 Braden Hitchcock                                                                                      *
*                                                                                                                      *
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with  *
* the License. You may obtain a copy of the License at                                                                 *
*                                                                                                                      *
*     http://www.apache.org/licenses/LICENSE-2.0                                                                       *
*                                                                                                                      *
* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on  *
* an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the   *
* specific language governing permissions and limitations under the License.                                           *
*                                                                                                                      *
**************************************************** END COPYRIGHT ****************************************************/
export enum ApplicationEvent {
    UPDATE_NAME = 'scootrio.studio.application.update-name',
    UPDATE_PROVIDER = 'scootrio.studio.application.update-provider',
    UPDATE_REGION = 'scootrio.studio.application.update-region',
    QUEUE_DEPLOYMENT = 'scootrio.studio.application.queue-deployment',
    QUEUE_DEPLOYMENT_RESULT = 'scootrio.studio.application.queue-deployment-result',
    DEPLOYMENT_PROGRESS = 'scootrio.studio.application.deployment-progress',
    DEPLOYMENT_RESULT = 'scootrio.studio.application.deployment-result',
    SAVE = 'scootrio.studio.application.save',
    LOAD = 'scootrio.studio.application.load',
    SELECT = 'scootrio.studio.application.select'
}

export default ApplicationEvent;
