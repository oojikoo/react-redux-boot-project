import React, { Component, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Router } from 'react-router';
import AppWrapper from '../layouts/App.layout';
import Home from '../../pages/Home.page';
import Temp from '../../pages/Temp.page';
import HttpError from '../../pages/HttpError.page';


interface IProps {
  store?: any;
  location?: any;
}
// const NotFoundRedirect = () => <Redirect to='/errors/404' />;


function RootNavigator(props: {}) {
    return (
        <BrowserRouter>
            <AppWrapper>
                <Switch>
                    <Route path='/errors/:code' component={HttpError} exact />
                    <Route path='/temp' component={Temp} exact />
                    <Route path='/' component={Home} exact />
                    <Redirect to='/errors/404' />
                </Switch>
            </AppWrapper>
        </BrowserRouter>
    );
};

export default RootNavigator;
