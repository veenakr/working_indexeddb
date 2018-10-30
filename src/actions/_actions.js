import { userService } from '../services/_services';
import { history } from '../helpers/history';

export const userActions = {
    login,
    logout,
    getAll
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    console.log(error);
                }
            );
    };

    function request(user) { return { type: 'LOGIN_REQUEST', user } }
    function success(user) { return { type: 'LOGIN_SUCCESS', user } }
    function failure(error) { return { type: 'LOGIN_FAILURE', error } }
}

function logout() {
    userService.logout();
    return { type: 'LOGOUT' };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: 'GETALL_REQUEST' } }
    function success(users) { return { type: 'GETALL_SUCCESS', users } }
    function failure(error) { return { type: 'GETALL_FAILURE', error } }
}