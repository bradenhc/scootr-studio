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
import producer from 'immer';

import events from './events';

import type { Action } from 'shared/action';

export type ApplicationState = {
    id: string;
    name: string | null;
    provider: string | null;
    region: string | null;
    isDeployed: boolean;
    isDeploying: boolean;
    hasUnsavedChanges: boolean;
}

export type ApplicationStateCollection = {
    [id: string]: ApplicationState;
}

const initialState: ApplicationStateCollection = {
    'edaam:application/default': {
        id: 'edaam:application/default',
        name: null,
        provider: null,
        region: null,
        isDeployed: false,
        isDeploying: false,
        hasUnsavedChanges: true
    }
};

const reduce = producer((draft, action: Action) => {
    switch (action.type) {
        case events.UPDATE_NAME:
            draft[action.payload.id].name = action.payload.name;
            break;

        case events.UPDATE_PROVIDER:
            draft[action.payload.id].provider = action.payload.provider;
            break;

        case events.UPDATE_REGION:
            draft[action.payload.id].region = action.payload.region;
            break;

        case events.QUEUE_DEPLOYMENT:
            draft[action.payload.id].isDeploying = true;
            break;

        case events.QUEUE_DEPLOYMENT_RESULT:
            if (action.error) {
                draft[action.payload.id].isDeploying = false;
            }
            break;

        case events.DEPLOYMENT_RESULT:
            if (!action.error && !draft[action.payload.id].isDeployed) {
                draft[action.payload.id].isDeployed = true;
            }
            break;

        case events.SAVE:
            draft[action.payload.id].hasUnsavedChanges = false;
            break;
    }
}, initialState);

export default reduce;
