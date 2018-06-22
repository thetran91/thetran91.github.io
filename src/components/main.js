import React from 'react';
import { Route , Switch } from 'react-router-dom';//react-router-dom >v.4 need BrowserRouter!
import LandingPage from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import AboutMe from './aboutme';

const Main = () => (
    <main>
    <Switch>
        <Route exact path = "/" component = {LandingPage}/>
        <Route path = "/contact" component = {Contact}/>
        <Route path = "/aboutme" component = {AboutMe}/>
        <Route path = "/projects" component = {Projects}/>
        <Route path = "/resume" component = {Resume}/>
    </Switch>
    </main> 
)
export default Main