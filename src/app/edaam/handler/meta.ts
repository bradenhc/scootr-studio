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
import uuid from 'uuid';

import { createComponentMetadata } from 'edaam/metadata/creator';

import { captions } from './validation';

import type { ComponentMetadata, ComponentEndpoint, ComponentPosition } from 'edaam/metadata/creator';

export function createHandlerMetadata(position: ComponentPosition): ComponentMetadata {
    return createComponentMetadata(position, {
        tooltip: 'Handler',
        endpoints: createHandlerEndpoints(),
        errors: {
            name: captions.NameMissing,
            runtime: captions.RuntimeMissing,
            code: captions.CodeMissing
        }
    });
}

function createHandlerEndpoints(): ComponentEndpoint[] {
    return [
        {
            isSource: true,
            id: uuid.v4(),
            scopes: ['event-public', 'event-private'],
            dashed: true
        },
        {
            isTarget: true,
            id: uuid.v4(),
            scopes: ['handler'],
            dashed: true
        }
    ];
}
