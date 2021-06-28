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
 * Defines the collection of metadata for EDAAM components keyed by ID.
 */
export type ComponentMetadataCollection = {
    [id: string]: ComponentMetadata;
};

/**
 * Describes the UI state that represents the component.
 */
export type ComponentMetadata = {
    nid: string;
    tooltip: string | null;
    position: ComponentPosition;
    endpoints: ComponentEndpoint[];
    errors: ComponentErrorMap;
};

/**
 * Contains the pixel-coordinate location of the component on the UI canvas.
 */
export type ComponentPosition = { x: number; y: number };

/**
 * Describes an endpoint associated with a component, such as how it should be drawn and how the user can interact
 * with it.
 */
export type ComponentEndpoint = {
    id: string;
    scopes: string[];
    isSource?: boolean;
    isTarget?: boolean;
    dashed?: boolean;
};

/**
 * Contains validation eror messages to be presented to the user for the component associated with this metadata.
 */
export type ComponentErrorMap = { [name: string]: ComponentError };

/**
 * Describes the shape of a single error for a component field.
 */
export type ComponentError = string | null;

/**
 * Describes the expected options when creating a new `ComponentMetadata` object.
 */
export type ComponentMetadataOptions = {
    endpoints?: ComponentEndpoint[];
    tooltip?: string;
    errors?: ComponentErrorMap;
};

/**
 * Create a plain JavaScript object for EDAAM component metadata.
 *
 * @param position The position of the component on the canvas.
 * @param options Additional metadata information
 * @returns A plain JavaScript object in the expected shape for EDAAM component metadata.
 */
export function createComponentMetadata(
    position: ComponentPosition,
    options: ComponentMetadataOptions = {}
): ComponentMetadata {
    return {
        nid: uuid.v4(),
        tooltip: options.tooltip || null,
        position: position,
        endpoints: options.endpoints || [],
        errors: options.errors || {}
    };
}

