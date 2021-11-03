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
export enum EventEvent {
    // Lifecycle
    SELECT = 'scootrio.studio.edaam.event.select',
    CREATE = 'scootrio.studio.edaam.event.create',
    CREATE_SUCCESS = 'scootrio.studio.edaam.event.create-success',
    DELETE = 'scootrio.studio.edaam.event.delete',

    // Properties
    UPDATE_PROTECTION = 'scootrio.studio.edaam.event.update-protection',
    UPDATE_HTTP_PATH = 'scootrio.studio.edaam.event.update-http-path',
    UPDATE_HTTP_METHOD = 'scootrio.studio.edaam.event.update-http-method',
    UPDATE_PUBSUB_BROKER = 'scootrio.studio.edaam.event.update-pubsub-broker',
    UPDATE_PUBSUB_TOPIC = 'scootrio.studio.edaam.event.update-pubsub-topic',

    // Metadata
    UPDATE_POSITION = 'scootrio.studio.edaam.event.update-position'
}

export default EventEvent;
  