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
    NameMissing: 'Handler name is required',
    NameInvalid: 'Handler name must only contain alphanumeric characters',
    RuntimeMissing: 'Runtime is required',
    CodeMissing: 'Handler code missing'
};

const nameSchema = Joi.string().alphanum().error(new Error(captions.NameInvalid));

export const validators: ValidatorSet = {
    name: (val) => {
        if (val === '' || val === null) return captions.NameMissing;
        const { error } = nameSchema.validate(val);
        if (error) return error.message;
        return null;
    },
    runtime: (val) => {
        if (val === '' || val === null) return captions.RuntimeMissing;
        return null;
    },
    code: (val) => {
        if (val === '' || val === null) return captions.CodeMissing;
        return null;
    },
    environment: (val) => {
        return null;
    }
};
