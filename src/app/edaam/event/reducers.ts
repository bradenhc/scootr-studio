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
import produce from 'immer';

import events from './events';

import type { Action } from 'shared/action';

import type { EventComponent, HttpEventProps, PubsubEventProps } from './creator';

export type EventComponentCollection = { [id: string]: EventComponent };

const initialState: EventComponentCollection = {};

const reduce = produce((draft, action: Action) => {
    switch (action.type) {
        case events.CREATE_SUCCESS:
            draft[action.payload.event.id] = action.payload.event;
            break;

        case events.UPDATE_PROTECTION:
            draft[action.payload.id].props.protection = action.payload.value;
            break;

        case events.UPDATE_HTTP_PATH:
            (draft[action.payload.id].props as HttpEventProps).path = action.payload.value;
            break;

        case events.UPDATE_HTTP_METHOD:
            (draft[action.payload.id].props as HttpEventProps).method = action.payload.value;
            break;

        case events.UPDATE_PUBSUB_BROKER:
            (draft[action.payload.id].props as PubsubEventProps).broker = action.payload.value;
            break;

        case events.UPDATE_PUBSUB_TOPIC:
            (draft[action.payload.id].props as PubsubEventProps).topic = action.payload.value;
            break;

        case events.DELETE:
            delete draft[action.payload];
            break;
    }
}, initialState);

export default reduce;
