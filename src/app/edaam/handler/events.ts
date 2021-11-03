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
enum HandlerEvent {
    // Lifecycle
    SELECT = 'scootrio.studio.edaam.handler.select',
    CREATE = 'scootrio.studio.edaam.handler.create',
    CREATE_SUCCESS = 'scootrio.studio.edaam.handler.create-success',
    CREATE_FAILURE = 'scootrio.studio.edaam.handler.create-failure',
    DELETE = 'scootrio.studio.edaam.handler.delete',

    // Properties
    UPDATE_CODE = 'scootrio.studio.edaam.handler.update-code',
    UPDATE_RUNTIME = 'scootrio.studio.edaam.handler.update-runtime',
    ADD_ENVIRONMENT_VARIABLE = 'scootrio.studio.edaam.handler.env-var-add',
    UPDATE_ENVIRONMENT_VARIABLE = 'scootrio.studio.edaam.handler.env-var-update',
    DELETE_ENVIRONMENT_VARIABLE = 'scootrio.studio.edaam.handler.env-var-delete',

    // Metadata
    UPDATE_POSITION = 'scootrio.studio.edaam.handler.update-position',

    // Operations
    FETCH_LOGS = 'scootrio.studio.edaam.handler.fetch-logs',
    FETCH_LOGS_RESULT = 'scootrio.studio.edaam.handler.fetch-logs-result',
    FETCH_LOGS_UPDATE = 'scootrio.studio.edaam.handler.fetch-logs-update',
    CANCEL_FETCH_LOGS = 'scootrio.studio.edaam.handler.cancel-fetch-logs'
}

export default HandlerEvent;
