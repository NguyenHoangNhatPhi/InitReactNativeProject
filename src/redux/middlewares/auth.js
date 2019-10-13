const authMiddleware = store => next => action => {
    console.log('authMiddleware :  ', action);
    if (action.token) {
        // const appState = store.getState();
        // return next({ ...action, token: appState.dataLocal.profileStaffLogin.token });

    }
    return next(action);

}

export default authMiddleware;