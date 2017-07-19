import React from 'react/addons'
import Router from 'react-router'
import FastClick from 'fastclick'
import "babel-polyfill"

// import '../lib/base.css'
// import '../lib/weui.css'

const { DefaultRoute, Route, RouteHandler } = Router

import {
  Home, Divider, Badge, Dialog, Toast, Button, Header,
  Checkbox, Flex, Grid, Msg, Input, Swiper, Switch, Tab,
  Tip, Textarea, Sticky, Offcanvas, FormPreview,
} from './index'

let App = React.createClass({
  render() {
    return <RouteHandler/>
  }
})

window.addEventListener('load', () => {
  FastClick.attach(document.body);
});

let routes = (
  <Route name="app" path="/" handler={ App }>
    <Route name="divider" handler={ Divider }/>
    <Route name="badge" handler={ Badge }/>
    <Route name="dialog" handler={ Dialog }/>
    <Route name="toast" handler={ Toast }/>
    <Route name="button" handler={ Button }/>
    <Route name="header" handler={ Header }/>

    <Route name="input" handler={ Input }/>
    <Route name="checkbox" handler={ Checkbox }/>
    <Route name="grid" handler={ Grid }/>
    <Route name="flex" handler={ Flex }/>
    <Route name="textarea" handler={ Textarea }/>
    <Route name="offcanvas" handler={ Offcanvas }/>
    <Route name="msg" handler={ Msg }/>
    <Route name="tab" handler={ Tab }/>
    <Route name="tip" handler={ Tip }/>
    <Route name="sticky" handler={ Sticky }/>
    <Route name="swiper" handler={ Swiper }/>
    <Route name="switch" handler={ Switch }/>
    <Route name="form-preview" handler={ FormPreview }/>
    <DefaultRoute handler={ Home }/>
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('container'));
});