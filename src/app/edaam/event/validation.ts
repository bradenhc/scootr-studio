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
import Joi from '@hapi/joi';

import type { ValidatorSet } from 'edaam/validation';

export const captions = {
    // Shared
    NameMissing: 'Resource name is required',
    NameInvalid: 'Resource name must only contain alphanumeric characters',
    TypeMissing: 'Event type is missing',

    // Private Event
    BrokerMissing: 'Broker is required',
    TopicNameMissing: 'Topic name is required',
    TopicNameInvalid: 'Topic name must only include alphanumeric characters, dashes, and underscores',

    // Public Event
    PathMissing: 'Path is required',
    PathInvalid: 'Path cannot have a trailing slash',
    HttpMethodMissing: 'Method is required'
};

const nameSchema = Joi.string().alphanum().error(new Error(captions.NameInvalid));

const topicNameSchema = Joi.string()
    .regex(/^[a-zA-Z0-9\-_]+$/m)
    .error(new Error(captions.TopicNameInvalid));

export const validators: ValidatorSet = {
    // Shared
    name: (val) => {
        if (val === '' || val === null) return captions.NameMissing;
        const { error } = nameSchema.validate(val);
        if (error) return error.message;
        return null;
    },
    type: (val) => {
        if (val === '' || val === null) return captions.TypeMissing;
    },

    // Private Event
    broker: (val) => {
        if (val === '' || val === null) return captions.BrokerMissing;
        return null;
    },
    topic: (val) => {
        if (val === '' || val === null) return captions.TopicNameMissing;
        const { error } = topicNameSchema.validate(val);
        if (error) return error.message;
        return null;
    },

    // Public Event
    path: (val) => {
        if (val === '' || val === null) return captions.PathMissing;
        const re = /\/+ *$/gm;
        if (val.match(re)) {
            return captions.PathInvalid;
        }
        return null;
    },
    method: (val) => {
        if (val === '' || val === null) return captions.HttpMethodMissing;
        return null;
    }
};
