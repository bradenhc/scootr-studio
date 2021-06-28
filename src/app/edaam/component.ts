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

/**
 * Describes the general shape of an EDAAM component.
 *
 * All EDAAM components  share a similar top-level shape. This shape is captured by this type. Additional data
 * belonging to a specific type of component is stored in the `props` field.
 */
export type Component<PropType> = {
    id: string;
    type: ComponentType;
    name: string;
    specialization?: string;
    props: PropType;
};

/**
 * Describes the complete set of EDAAM component types recognized by the system.
 */
export enum ComponentType {
    EVENT = 'event',
    HANDLER = 'handler',
    STORAGE = 'storage',
    REFERENCE = 'reference',
    TRIGGER = 'trigger'
}

/**
 * Create a plain JavaScript object in the shape of an EDAAM component.
 *
 * @param type The type of component
 * @param props The properties containing additional information about the component
 *
 * @returns An initialized EDAAM component.
 */
export function createComponent<PropType>(type: ComponentType, props: PropType): Component<PropType> {
    return {
        id: 'edaam:' + type + '/' + uuid.v4(),
        type: type,
        name: '',
        props: props
    };
}

