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
import type { IState } from 'app/state';

export default {
    getAll: function (state: IState) {
        return state.applications[state.selected.application];
    },

    getId: function (state: IState) {
        return state.selected.application;
    },

    getName: function (state: IState) {
        return state.applications[state.selected.application].name;
    },

    getIsNameValid: function (state: IState) {
        const app = state.applications[state.selected.application];
        if (app.name === '') {
            return { valid: false, message: 'Application name is required' };
        }
        if (!/(^[a-z0-9]+$)/gim.test(app.name)) {
            return { valid: false, message: 'Application name must only contain alphanumeric characters' };
        }
        return { valid: true };
    },

    getProvider: function (state: IState) {
        return state.applications[state.selected.application].provider;
    },

    getIsProviderValid: function (state: IState) {
        const app = state.applications[state.selected.application];
        if (app.provider === null || app.provider === '') {
            return { valid: false, message: 'Provider cannot be empty' };
        }
        return { valid: true };
    },

    getRegion: function (state: IState) {
        return state.applications[state.selected.application].region;
    },

    getIsRegionValid: function (state: IState) {
        const app = state.applications[state.selected.application];
        if (app.region === null || app.region === '') {
            return { valid: false, message: 'Region cannot be empty' };
        }
        return { valid: true };
    },

    getIsDeployed: function (state: IState) {
        return state.applications[state.selected.application].isDeployed;
    },

    getIsDeploying: function (state: IState) {
        return state.applications[state.selected.application].isDeploying;
    },

    getHasUnsavedChanges: function (state: IState) {
        return state.applications[state.selected.application].hasUnsavedChanges;
    }
};
