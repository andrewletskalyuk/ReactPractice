import * as types from './types';
import LoginService from './service';
import { push } from 'connected-react-router';

export const loginUser = (model) => {
    return (dispatch) => {
        dispatch({type: types.LOGIN_STARTED});
        LoginService.loginUser(model)
            .then((response)=>{
                dispatch({type: types.LOGIN_SUCCESS});
                dispatch(push('/'));
                console.log("---------------", response.data);
                //const token = await tokenProvider.getToken();
                localStorage.setItem("token", response.data.token);
            }, err => {
                //console.log("error: ", err.response);
                dispatch({
                    type: types.LOGIN_FAILED,
                    errors: err.response.data
                });
            })
            .catch(err=> {
                console.log("Global server error", err);
            }
        );

    }
}