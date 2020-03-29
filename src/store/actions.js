import {createAction} from 'redux-actions';
import {makeAsyncCreateActions,makeAsyncActions} from 'lib/utils';
import * as API from 'lib/api';

// Action
export const BASE_EXIT_LANDING  = 'base/BASE_EXIT_LANDING';
export const BASE_ENTER_LANDING = 'base/BASE_ENTER_LANDING';

export const base_exit_landing  = createAction(BASE_EXIT_LANDING);
export const base_enter_landing = createAction(BASE_ENTER_LANDING);

// Sagas
export const AUTH_SIGNIN       = makeAsyncActions('auth/AUTH_SIGNIN');
export const AUTH_SIGNIN_SAGAS = makeAsyncCreateActions(AUTH_SIGNIN)(API.postSignin);

export const AUTH_TOKEN       = makeAsyncActions('auth/AUTH_TOKEN');
export const AUTH_TOKEN_SAGAS = makeAsyncCreateActions(AUTH_TOKEN)(API.postToken);

export const AUTH_LOGOUT       = makeAsyncActions('auth/AUTH_LOGOUT');
export const AUTH_LOGOUT_SAGAS = makeAsyncCreateActions(AUTH_LOGOUT)(API.postLogout);
