import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText} from 'react-mdl';


class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    toggleCategories() {
    if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">
            {/*Project 1*/}
            <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2i2HxPpQGAZLBMaH-uXOtxeDxnr834RWiB814bzuDaWSyHc6y'}}>React Projects #1</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                <CardActions border>
                    <Button colored>GITHUB</Button>
                    <Button colored>CODEPEN</Button>
                    <Button colored>LIVEDEMO</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            {/*Project 2*/}
            <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                 <CardTitle style={{color: 'white', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2i2HxPpQGAZLBMaH-uXOtxeDxnr834RWiB814bzuDaWSyHc6y'}}>React Projects #2</CardTitle>
                     <CardText>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Mauris sagittis pellentesque lacus eleifend lacinia...
                     </CardText>
                 <CardActions border>
                     <Button colored>GITHUB</Button>
                     <Button colored>CODEPEN</Button>
                     <Button colored>LIVEDEMO</Button>
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share" />
                 </CardMenu>
             </Card>
              {/*Project 3*/}
              <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                  <CardTitle style={{color: 'white', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2i2HxPpQGAZLBMaH-uXOtxeDxnr834RWiB814bzuDaWSyHc6y'}}>React Projects #3</CardTitle>
                      <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Mauris sagittis pellentesque lacus eleifend lacinia...
                      </CardText>
                  <CardActions border>
                      <Button colored>GITHUB</Button>
                      <Button colored>CODEPEN</Button>
                      <Button colored>LIVEDEMO</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
            </Card>
        </div>
             
        )
    }else if (this.state.activeTab === 1){
        return(
            <div>
                <h1>This is Angular</h1>                
            </div>
        )
    }else if (this.state.activeTab === 2){
        return(
            <div>
                <h1>This is VueJS</h1>                
            </div>
        )
    }else if (this.state.activeTab === 3){
        return(
            <div>
                <h1>This is MongoDB</h1>                
            </div>
        )
    } 
    }
    render(){
        return(
            <div className="category-tabs" >
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content" >{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}
export default Projects;

