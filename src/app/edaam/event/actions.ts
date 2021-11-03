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

import type { ComponentPosition } from 'edaam/metadata/creator';

import type { EventComponent } from './creator';

export default {
    select: function (id: string) {
        return action(events.SELECT, id);
    },

    create: function (type: string, options: any) {
        return action(events.CREATE, { type, options });
    },

    createSuccess: function(event: EventComponent) {
        return action(events.CREATE_SUCCESS, { event })
    },

    updateProtection: function (id: string, value: any) {
        return action(events.UPDATE_PROTECTION, { id, value });
    },

    updateHttpPath: function (id: string, value: any) {
        return action(events.UPDATE_HTTP_PATH, { id, value });
    },

    updateHttpMethod: function (id: string, value: any) {
        return action(events.UPDATE_HTTP_METHOD, { id, value });
    },

    updatePubSubBroker: function (id: string, value: any) {
        return action(events.UPDATE_PUBSUB_BROKER, { id, value });
    },

    updatePubSubTopic: function (id: string, value: any) {
        return action(events.UPDATE_PUBSUB_TOPIC, { id, value });
    },

    delete: function (id: string) {
        return action(events.DELETE, id);
    },

    updatePosition: function (id: string, position: ComponentPosition) {
        return action(events.UPDATE_POSITION, { id, position });
    }
};
