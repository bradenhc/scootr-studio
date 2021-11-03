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
import action from 'shared/action';

import events from './events';

export default {
    select: function (id: string) {
        return action(events.SELECT, id);
    },

    create: function (options: any) {
        return action(events.CREATE, options);
    },

    createSuccess: function (newHandler: any) {
        return action(events.CREATE_SUCCESS, newHandler);
    },

    createFailure: function (message: string) {
        return action(events.CREATE_FAILURE, message, true);
    },

    updateCode: function (id: string, value: string) {
        return action(events.UPDATE_CODE, { id, value });
    },

    updateRuntime: function (id: string, value: string) {
        return action(events.UPDATE_RUNTIME, { id, value });
    },

    addEnvironmentVariable: function (id: string, key: string, value: string) {
        return action(events.ADD_ENVIRONMENT_VARIABLE, { id, key, value });
    },

    updateEnvironmentVariable: function (id: string, key: string, value: any) {
        return action(events.UPDATE_ENVIRONMENT_VARIABLE, { id, key, value });
    },

    deleteEnvironmentVariable: function (id: string, key: string) {
        return action(events.DELETE_ENVIRONMENT_VARIABLE, { id, key });
    },

    delete: function (id: string) {
        return action(events.DELETE, id);
    },

    // Position
    updatePosition: function (id: string, x: number, y: number) {
        return action(events.UPDATE_POSITION, { id, x, y });
    }
};
