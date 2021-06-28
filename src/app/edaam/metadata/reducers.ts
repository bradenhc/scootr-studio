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

import { validators as eventValidators } from 'edaam/event/validation';
import eventEvents from 'edaam/event/events';
import { createEventMetadata } from 'edaam/event/meta';

import type { WritableDraft } from 'immer/dist/internal';
import type { ValidatorSet } from 'edaam/validation';
import type { Action } from 'shared/action';
import type { ComponentMetadataCollection } from './creator';

const initialState: ComponentMetadataCollection = {};

function validateWith(validators: ValidatorSet, draft: WritableDraft<ComponentMetadataCollection>, action: Action) {
    const error = validators[action.payload.property](action.payload.value);
    if (error) {
        draft[action.payload.id].errors[action.payload.property] = error;
    } else {
        delete draft[action.payload.id].errors[action.payload.property];
    }
}

const reduce = produce((draft, action: Action) => {
    switch (action.type) {
        case eventEvents.CREATE_SUCCESS:
            const newMeta = createEventMetadata(action.payload.event.props.protection, { x: 0, y: 0 });
            draft[action.payload.event.id] = newMeta;
            break;

        case eventEvents.UPDATE:
            validateWith(eventValidators, draft, action);
            break;

        case eventEvents.DELETE:
            delete draft[action.payload];
            break;

        case eventEvents.UPDATE_POSITION:
            const event = draft[action.payload.id];
            event.position = action.payload.position;
            break;
    }
}, initialState);

export default reduce;
