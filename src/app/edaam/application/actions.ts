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
import events from './events';

import action from 'shared/action';

export default {
    updateName: function (id: string, name: string) {
        return action(events.UPDATE_NAME, { id, name });
    },

    updateProvider: function (id: string, provider: string) {
        return action(events.UPDATE_PROVIDER, { id, provider });
    },

    updateRegion: function (id: string, region: string) {
        return action(events.UPDATE_REGION, { id, region });
    },

    queueDeployment: function (id: string, pkg: object) {
        return action(events.QUEUE_DEPLOYMENT, { id, pkg });
    },

    queueDeploymentResponse: function (id: string, result: object, error: boolean) {
        return action(events.QUEUE_DEPLOYMENT_RESULT, { id, result }, error);
    },

    deploymentProgress: function (id: string, message: string) {
        return action(events.DEPLOYMENT_PROGRESS, { id, message });
    },

    deploymentResult: function (id: string, message: string, error: boolean) {
        return action(events.DEPLOYMENT_RESULT, { id, message }, error);
    },

    save: function (id: string, contents: object) {
        return action(events.SAVE, { id, contents });
    },

    load: function (id: string) {
        return action(events.LOAD, id);
    },

    select: function (id: string) {
        return action(events.SELECT, id);
    }
};
