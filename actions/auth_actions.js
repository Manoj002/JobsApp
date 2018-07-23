import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');   // .getItem is a async call
// AsyncStorage returns a promise object 

// export const facebooklogin = async () => {

//     let token = await AsyncStorage.getItem('fb_token');

//     if(token) {

//     }
//     else {

//     }

// }                                                        SHOT 1






// export const facebooklogin = () => {

//     return async (dispatch) => {  // instead of word function we are using arrow function
           
//         let token = await AsyncStorage.getItem('fb_token');

//         if(token) {
//             // if we got a token, we have to dispatch a fb login action so 
//             // redux-thunk will be used to object dispatch the action
//         }
//         else {

//         }
//     }
// }                                                      SHOT 2   





// export const facebooklogin = () =>        // rules of arrow function(removal of curly braces and return keyword)

//     async (dispatch) => {  // instead of word function we are using arrow function

//         let token = await AsyncStorage.getItem('fb_token');

//         if(token) {
//             // if we got a token, we have to dispatch a fb login action so 
//             // redux-thunk will be used to object dispatch the action
//         }
//         else {

//         }
//     };                                                  SHOT 3





export const facebookLogin = () => async dispatch => {  // as we are having only one argument we can remove parens
    // rules of arrow function(removal of curly braces and return keyword)
    // instead of word function we are using arrow function
                        
    let token = await AsyncStorage.getItem('fb_token');

    if(token) {
        // if we got a token, we have to dispatch a fb login action so 
        // redux-thunk will be used to object dispatch the action
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token});
    }
    else {

        doFacebookLogin(dispatch);  

    }
};



const doFacebookLogin = async dispatch => {
    // result has various properties
    // we want only type(current status) and token
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('391589814651666', {
        permissions: ['public_profile']
    });

    if(type === 'cancel') {             
        // i.e. when a user enters invalid credentials type has value of cancel
        return dispatch({ type: FACEBOOK_LOGIN_FAIL })
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
}   