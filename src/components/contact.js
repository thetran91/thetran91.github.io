import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                 <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>Tran Xuan The</h2>
                    <img 
                    src="https://www.shareicon.net/download/2015/09/18/103161_man_512x512.png"
                    alt="avarta"
                    style={{height: '250px'}}
                    />
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                    </Cell>
                    
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list" style={{paddingTop:'5px'}}>
                        <List style={{paddingTop:'5px'}}>
                            <ListItem>
                                <ListItemContent style={{fontFamily:'Anton', fontSize: '30px' }}>
                                    <i class="fa fa-phone-square"  aria-hidden="true"/>
                                    (84) 1298.378.688
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontFamily:'Anton', fontSize: '30px'}}>
                                    <i class="fa fa-envelope"  aria-hidden="true"/>
                                    eg.tranxuanthe@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontFamily:'Anton', fontSize: '30px'}}>
                                    <i class="fa fa-skype"  aria-hidden="true"/>
                                    My Skype: Thetran91
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontFamily:'Anton', fontSize: '30px'}}>
                                    <i class="fa fa-facebook-square"  aria-hidden="true"/>
                                    My Facebook: The Tran
                                </ListItemContent>
                            </ListItem>
                            
                        </List>
                        </div>
                    </Cell>
                 </Grid>
            </div>
           
        )
    }
}
export default Contact;

