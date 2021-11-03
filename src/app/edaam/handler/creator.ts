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

export type HandlerComponent = Component<HandlerProps>;

export type HandlerProps = {
    runtime: string;
    code: string;
    environment: { [key: string]: string }[];
};

export function createHandler(): HandlerComponent {
    return createComponent(ComponentType.HANDLER, createHandlerProps());
}

function createHandlerProps(): HandlerProps {
    return {
        runtime: null,
        code: null,
        environment: []
    };
}
