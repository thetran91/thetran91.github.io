import React, { Component } from 'react';


class About extends Component {
    render(){
        return(
            <div style={{fontFamily: 'Anton', color:'Black', textAlign: 'center'}}>
                <h1> About Me </h1>
                <hr style={{borderTop:'3px solid #883fb2'}}/>
                <p>Full Stack Web Developer using MongoDB, Express, React, Node.js (MERN) with an emphasis on Frontend web development and mobile using React & React Native. Experienced in building CRUD applications, RESTful APIs using Node.js and express, User Auth and oAuth with PassportJS and Firebase. Common libraries of use: Axios, Redux, Mongoose, Lodash, Express, body-parser, socket.io, react-router, redux- thunk. Common use of UI libraries: Bootstrap 4, React-Bootstrap, MaterializeCSS, Material-UI, Elemental-UI and Native-Base for React Native.</p>
            </div>
        )
    }
}
export default About;

