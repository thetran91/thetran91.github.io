import React, { Component } from 'react';
import {Cell, Grid, ProgressBar} from 'react-mdl';



class Skills extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={12}>
                        <div style={{display:"flex"}}>{this.props.skills} <ProgressBar style={{margin:"auto", width: '75%'}} progress={this.props.progress}/></div>
                    </Cell>
                   
                </Grid>
            </div>
        )
    }
}
export default Skills;
