import React, { Component } from 'react';
import {Cell, Grid} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}> 
                    <div style={{textAlign:'center'}}>
                        <img
                        src="https://www.shareicon.net/download/2015/09/18/103161_man_512x512.png"
                        alt="avarta"
                        style={{height: '250px'}}
                        />
                    </div>
                    <h2 style={{paddingTop:'2em'}}>Tran Xuan The</h2>
                    <h4 style={{Color:'grey'}}>Programmer</h4>
                    <hr style={{borderTop:'3px solid #883fb2', width:'50%'}}/>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                    <hr style={{borderTop:'3px solid #883fb2', width:'50%'}}/>
                    <h5>Adress</h5>
                        <p> Ngo Quyen - Hai Phong - Viet Nam</p>
                    <h5>Phone</h5>
                     <p> 01298.378.688</p>
                    <h5>Email</h5>
                        <p> eg.tranxuanthe@gmail.com</p>
                    <h5>Website</h5>
                        <p> thetran.com</p>
                    <hr style={{borderTop:'3px solid #883fb2', width:'50%'}}/>
                    </Cell>
                    <Cell col={8} className="resume-right-col"> 
                    <h2>Eduacation</h2>
                        <Education
                            startYear={2009}
                            endYear={2013}
                            schoolName="VMU"
                            schoolDescription="Ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                        />
                        <Education
                            startYear={2016}
                            endYear={2018}
                            schoolName="HUST"
                            schoolDescription="Ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                        />
                    <hr style={{borderTop:'3px solid #e22947'}}/>
                    <h2>Experiece</h2>
                         <Experience
                            startYear={2014}
                            endYear={2017}
                            jobName="VMU"
                            jobDescription="Ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                        />
                        <Experience
                            startYear={2014}
                            endYear={2017}
                            jobName="KNOW NETWORK"
                            jobDescription="Ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                        />
                    <hr style={{borderTop:'3px solid #e22947'}}/>
                    <h2>Skills</h2>
                        <Skills
                            skills="JavaScript"
                            progress={80} 
                        />
                        <Skills
                            skills="HTML/CSS"
                            progress={95}
                        />
                        <Skills
                            skills="ReactJS"
                            progress={90}
                        />
                        <Skills
                            skills="NodeJS"
                            progress={80}
                        />
                        <Skills
                            skills="ExpressJS"
                            progress={80}
                        />
                        <Skills
                            skills="MongoDB"
                            progress={85}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;

