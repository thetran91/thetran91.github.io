import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid" >
                    <Cell col={12} > 
                        <img
                        src="https://www.shareicon.net/download/2015/09/18/103161_man_512x512.png"
                        alt="avarta"
                        className="avatar-img"
                        />
                    <div className = "banner-text">
                    <h1> Full Stack Web Developer </h1>
                    <hr/>
                    <p> HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB </p>
                    <div className ="social-links">
                        {/*Linkedin*/}
                        <a href="https://www.google.com.vn/" target="_blank" rel="nooppener noreferrer" >
                        <i class="fa fa-linkedin-square"  aria-hidden="true"></i>
                        </a>
                         {/*Github*/}
                         <a href="https://github.com/" target="_blank" rel="nooppener noreferrer" >
                        <i class="fa fa-github-square"  aria-hidden="true"></i>
                        </a>
                         {/*Freecodecamp*/}
                         <a href="https://www.freecodecamp.org/" target="_blank" rel="nooppener noreferrer" >
                        <i class="fa fa-free-code-camp"  aria-hidden="true"></i>
                        </a>
                        {/*Youtube*/}
                        <a href="https://youtube.com/" target="_blank" rel="nooppener noreferrer" >
                        <i class="fa fa-youtube-square"  aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                    </Cell>

                </Grid>
            </div>
            
        )
    }
}
export default Landing;

