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
import uuid from 'uuid';

import events from './events';
import { captions, validators } from './validation';

import type { Action } from 'shared/action';

export type EventStateCollection = {
    [id: string]: EventState;
};

export type EventState = {
    id: string;
    protection: EventProtection;
    name: string;
    type: string;
    props: EventProps;
    _meta: EventMetadata;
};

type EventProps = { [name: string]: any };

type EventMetadata = {
    nid: string;
    ntype: string;
    tooltip: string;
    position: { x: number; y: number };
    endpoints: EndpointDefinition[];
    errors: { [name: string]: string };
};

type EndpointDefinition = {
    id: string;
    scopes: string[];
    isSource?: boolean;
    isTarget?: boolean;
    dashed?: boolean;
};

type EventOptions = {
    x: number;
    y: number;
};

const initialState: EventStateCollection = {};

enum EventProtection {
    PUBLIC = 'public',
    PRIVATE = 'private'
}

enum EventType {
    HTTP = 'http',
    PUBSUB = 'pubsub'
}

function createEvent(type: EventProtection, options: EventOptions) {
    switch (type) {
        case EventProtection.PRIVATE:
            return createPrivateEvent(options);

        case EventProtection.PUBLIC:
            return createPublicEvent(options);
    }
}

function createPublicEvent(options: EventOptions): EventState {
    return {
        id: 'edaam:event/' + uuid.v4(),
        protection: EventProtection.PUBLIC,
        name: '',
        type: '',
        props: createPublicEventProps(),
        _meta: createPublicEventMetadata(options)
    };
}

function createPublicEventProps(type?: string): EventProps {
    switch (type) {
        case EventType.HTTP:
            return {
                path: '',
                method: ''
            };
        default:
            return {};
    }
}

function createPublicEventMetadata(options: EventOptions): EventMetadata {
    return {
        nid: uuid.v4(),
        ntype: 'external-event',
        tooltip: 'External Event',
        position: { x: options.x, y: options.y },
        endpoints: createPublicEventEndpoints(),
        errors: {
            name: captions.NameMissing,
            type: captions.TypeMissing,
            path: captions.PathMissing,
            method: captions.HttpMethodMissing
        }
    };
}

function createPublicEventEndpoints(): EndpointDefinition[] {
    return [
        {
            isSource: true,
            id: uuid.v4(),
            scopes: ['handler'],
            dashed: true
        }
    ];
}

function createPrivateEvent(options: EventOptions): EventState {
    return {
        id: 'edaam:event/' + uuid.v4(),
        protection: EventProtection.PRIVATE,
        name: '',
        type: '',
        props: createPrivateEventProps(),
        _meta: createPrivateEventMetdata(options)
    };
}

function createPrivateEventProps(type?: string): EventProps {
    switch (type) {
        case EventType.PUBSUB:
            return {
                broker: '',
                topic: ''
            };
        default:
            return {};
    }
}

function createPrivateEventMetdata(options: EventOptions): EventMetadata {
    return {
        nid: uuid.v4(),
        ntype: 'internal-event',
        tooltip: 'Internal Event',
        position: { x: options.x, y: options.y },
        endpoints: createPrivateEventEndpoints(),
        errors: {
            name: captions.NameMissing,
            type: captions.TypeMissing,
            broker: captions.BrokerMissing,
            topic: captions.TopicNameMissing
        }
    };
}

function createPrivateEventEndpoints(): EndpointDefinition[] {
    return [
        {
            isSource: true,
            id: uuid.v4(),
            scopes: ['handler'],
            dashed: true
        },
        {
            isTarget: true,
            id: uuid.v4(),
            scopes: ['event-internal'],
            dashed: true
        }
    ];
}

const reduce = produce((draft, action: Action) => {
    switch (action.type) {
        case events.CREATE:
            const newEvent = createEvent(action.payload.type, action.payload.options);
            draft[newEvent.id] = newEvent;
            break;

        case events.UPDATE:
            draft[action.payload.id].props[action.payload.property] = action.payload.value;
            const error = validators[action.payload.property](action.payload.value);
            if (error) {
                draft[action.payload.id]._meta.errors[action.payload.property] = error;
            } else {
                delete draft[action.payload.id]._meta.errors[action.payload.property];
            }
            break;

        case events.DELETE:
            delete draft[action.payload];
            break;

        case events.UPDATE_POSITION:
            const event = draft[action.payload.id];
            event._meta.position.x = action.payload.x;
            event._meta.position.y = action.payload.y;
            break;
    }
}, initialState);

export default reduce;
