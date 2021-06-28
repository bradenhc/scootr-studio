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
import { put, takeEvery, all } from 'redux-saga/effects';

import actions from './actions';
import events from './events';
import { createEvent } from './creator';

import type { Action } from 'shared/action';

function* onCreateEvent(action: Action) {
    const event = createEvent(action.payload.type);
    yield put(actions.createSuccess(event));
    yield put(actions.updatePosition(event.id, action.payload.position));
}

function* createEventSaga() {
    yield takeEvery(events.CREATE, onCreateEvent);
}

function* sagas() {
    yield all([createEventSaga]);
}

export default sagas;
