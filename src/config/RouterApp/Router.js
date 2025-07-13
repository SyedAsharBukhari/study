import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { ROUTER_APP } from '../../utils/routerlist';
import { save_tokens_constant, asyncStatus } from '../../utils/asyncstatus';
import { setAuthState, setIdleStatus } from '../../store/authSlice';
import { check_auth } from '../../services/authService';
import { PublicRoutes } from './PublicRoute';
import { PrivateRoutes } from './PrivateRoute';

const RouterApp = () => {
    const { check_auth_status, login_status } = useSelector((state) => state.userAuth);
    const dispatch = useDispatch();


    useEffect(() => {
        if (login_status === asyncStatus.SUCCEEDED) {
            dispatch(check_auth());
            dispatch(setIdleStatus())
        }
    }, [login_status])

    console.log("check_auth_status", check_auth_status);


    useEffect(() => {
        if (check_auth_status === asyncStatus.IDLE) {
            const authTokens = localStorage.getItem(save_tokens_constant.AUTH) || null;
            if (!authTokens) {
                dispatch(setAuthState(false));

            } else {
                dispatch(check_auth());

            }
        }
    }, [check_auth_status, dispatch]);

    if (check_auth_status === asyncStatus.IDLE || check_auth_status === asyncStatus.LOADING) {
        return (
            <div>
                wait.....
            </div>
        );
    }
    return (
        <BrowserRouter>
            <Routes>
                {/* Public */}
                <Route element={<PublicRoutes />}>
                    {
                        ROUTER_APP.map((elem, ind) => {
                            const { auth_required, path, component } = elem
                            return !auth_required && <Route path={path} element={component} />
                        })
                    }
                    <Route />
                </Route>

                {/* Private */}
                <Route element={<PrivateRoutes />}>
                    {
                        ROUTER_APP.map((elem, ind) => {
                            const { auth_required, path, component } = elem
                            return auth_required && <Route path={path} element={component} />
                        })
                    }
                    <Route />
                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default RouterApp;

