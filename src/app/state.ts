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
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// TODO: isolate so only in dev
import logger from 'redux-logger';

// import reduceStatus from 'status/reducers';
import reduceApplications from 'edaam/application/reducers';
import reduceEvents from 'edaam/event/reducers';
// import reduceSelected from 'edaam/selected/reducers';
// import reduceHandlers from 'edaam/handler/reducers';
// import reduceStorage from 'edaam/storage/reducers';
// import reduceReferences from 'edaam/reference/reducers';
// import reduceTriggers from 'edaam/trigger/reducers';

import rootSaga from './saga';

import type { ApplicationStateCollection } from 'edaam/application/reducers';
import type { EventStateCollection } from 'edaam/event/reducers';

export type AppState = {
    applications: ApplicationStateCollection;
    events: EventStateCollection;
    selected: any;
}

const reduce = combineReducers({
    //   status: reduceStatus,
    applications: reduceApplications,
    //   handlers: reduceHandlers,
    //   storage: reduceStorage,
    events: reduceEvents,
    //   references: reduceReferences,
    //   triggers: reduceTriggers,
    //   selected: reduceSelected,
    deployed: () => ({})
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reduce, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);
