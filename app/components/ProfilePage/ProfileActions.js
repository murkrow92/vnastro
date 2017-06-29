/**
 * Created by murkrow on 6/17/17.
 */


import {AsyncStorage} from 'react-native';
export const REQUEST_SAVE = 'request_save';
export const FORM_CHANGE = 'form_change';
export const GET_PROFILE_FROM_LOCAL = 'profile_load_from_local';

function getLocalProfile(profile) {
    return ({
        type: GET_PROFILE_FROM_LOCAL,
        profile
    });
}

export const getLocalProfileAsync = () => (dispatch, getState) =>
    AsyncStorage.getItem('profile').then(
        value => {
            if (value === null) {
                return Promise.resolve();
            }
            let profile = JSON.parse(value).profile;
            console.log(profile);
            dispatch(getLocalProfile(profile));
        },
        error => alert('Error: ' + error.message)
    );

export const getFacebookProfileAsync = () => (dispatch, getState) =>
    AsyncStorage.getItem('facebook').then(
        value => {
            if (value === null) {
                return Promise.resolve();
            }
            let profile = JSON.parse(value);
            console.log(profile);
            dispatch(getLocalProfile(profile));
        }
    );


export const requestSave = (profile) => ({
    type: REQUEST_SAVE,
    profile
});

export const onFormChange = (key, value) => ({
    type: FORM_CHANGE,
    key, value
});