import React, {useEffect} from 'react';
import css from './App.module.css'
import Dashboard from "./components/Dashboard/Dashboard";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import CreateBoard from "./components/CreateBoard/CreateBoard";
import {Tasks} from "./components/Tasks/Tasks";
import {useDispatch, useSelector} from "react-redux";
import {authState, localStorageGetItemRequest} from "./reducers/auth";
import {Redirect, Route, Switch} from "react-router-dom";

const App = () => {
    const isAuth = useSelector(state => state.auth.authState);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = dispatch(localStorageGetItemRequest('TOKEN'));
        if (token) {
            dispatch(authState());
        }
    });

    return (
        <div className={css.main}>
            {isAuth && <Switch>
                <Route path='/dashboard' render={() => <Dashboard/>}/>
                <Route path='/createBoard' render={() => <CreateBoard/>}/>
                <Route path='/tasks' render={() => <Tasks/>}/>
                <Redirect to='/dashboard'/>
            </Switch>}
            {!isAuth && <Switch>
                <Route path='/signIn'
                       render={() => <SignIn/>}/>
                <Route path='/signUp'
                       render={() => <SignUp/>}/>
                <Redirect to='/signIn'/>
            </Switch>}
        </div>

    );
};

export default App;
