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

import { ComponentType, createComponent } from 'edaam/component';

import type { Component } from 'edaam/component';

export type EventComponent = Component<EventProps>;

export type EventProps = PublicEventProps | PrivateEventProps;

export type CommonEventProps = {
    protection: EventProtection;
};

export type PublicEventProps = CommonEventProps | HttpEventProps;

export type PrivateEventProps = CommonEventProps | PubsubEventProps;

export type HttpEventProps = CommonEventProps & {
    path: string;
    method: HttpMethod | null;
};

export type PubsubEventProps = CommonEventProps & {
    broker: string;
    topic: string;
};

export enum EventProtection {
    PUBLIC = 'public',
    PRIVATE = 'private'
}

export enum EventSpecialization {
    HTTP = 'http',
    PUBSUB = 'pubsub'
}

export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete'
}

export function createEvent(type: EventProtection) {
    switch (type) {
        case EventProtection.PRIVATE:
            return createPrivateEvent();

        case EventProtection.PUBLIC:
            return createPublicEvent();
    }
}

function createPublicEvent(): EventComponent {
    return createComponent(ComponentType.EVENT, createPublicEventProps());
}

function createPublicEventProps(type?: string): PublicEventProps {
    const protection = EventProtection.PUBLIC;
    switch (type) {
        case EventSpecialization.HTTP:
            return {
                protection,
                path: '',
                method: null
            };
        default:
            return { protection };
    }
}

function createPrivateEvent(): EventComponent {
    return createComponent(ComponentType.EVENT, createPrivateEventProps());
}

function createPrivateEventProps(type?: string): PrivateEventProps {
    const protection = EventProtection.PRIVATE;
    switch (type) {
        case EventSpecialization.PUBSUB:
            return {
                protection,
                broker: '',
                topic: ''
            };
        default:
            return { protection };
    }
}
