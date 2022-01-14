import React from 'react';
// import Wheel from './Wheel';
import Screen from './Screen';
import ZingTouch from 'zingtouch'

class Ipod extends React.Component{
    constructor(){
        // We have to call the constructor of parent class that is super() as we are inheriting state constructor in our parent constructor
        super();
        this.state = {
            activeItem : 'Wallpapers',
            activePage : 'Home',
            enter : 0
        }
    }
    rotateWheel = () => {
        var currentAngle = 15;
        var containerElement = document.getElementById('wheel-container');
        var activeRegion = new ZingTouch.Region(containerElement);
        var childElement = document.getElementById('inner-container');
        var change = 0;
        var self = this;
        self.state.enter = self.state.enter + 1;

        if(self.state.enter < 2){
            activeRegion.bind(childElement, 'rotate', function(event){
                //Perform Operations
                
                var newAngle = event.detail.distanceFromLast;
                console.log(newAngle);
    
                if(newAngle < 0){
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'Wallpapers'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "Wallpapers"
                                })
                            }
                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'MyMusic'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "MyMusic"
                                })
                            }
                        }
                    }
                }else{
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage == 'Home'){
                            if(self.state.activeItem === 'Wallpapers'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "Wallpapers"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }
                        }else if(self.state.activePage == 'Music'){
                            if(self.state.activeItem === 'MyMusic'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "MyMusic"
                                })
                            }
                        }
                    }
                }
            });
        }else{
            console.log("Not allowed to enter")
        }     
    }
    
    changePage = () => {

        // this.setState({
        //     activeItem : this.state.activeItem,
        //     activePage : this.state.activeItem
        // })
        if(this.state.activeItem === 'Music'){
            this.setState({
                activeItem : 'MyMusic',
                activePage : this.state.activeItem
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : this.state.activeItem
            })
        }
    }

    changePageToHomeScreen = () => {
        if(this.state.activePage === 'Music' || this.state.activePage === 'Wallpapers' || this.state.activePage === 'Settings' || this.state.activePage === 'Games'){
            this.setState({
                // activeItem : 'Wallpapers',
                activeItem : this.state.activeItem,
                activePage : 'Home'
            })
        }else{
            this.setState({
                // activeItem : this.state.activeItem,
                activeItem : 'Music',
                activePage : 'Home'
            })
        }   
    }
    render(){
        return(
            <div style = {styles.ipodCase}>
                {/* <Screen />
                <Wheel /> */}
                <Screen activeItem={this.state.activeItem} activePage={this.state.activePage}/>
                {/*  Wheel Container div */}
                <div style = {styles.wheelContainer} id ='wheel-container'>
                    {/* Wheel div */}
                    <div id='inner-container' style = {styles.wheel} onMouseOver = {this.rotateWheel}>
                        {/* Div for button container in top row i.e only menu button*/}
                        <div style = {styles.buttonContainer}>
                            {/* Menu button div */}
                            <div style = {styles.menuButton}>
                                <img onClick={this.changePageToHomeScreen} style = {styles.image} src="https://cdn-icons-png.flaticon.com/128/168/168214.png"  alt= ''/>
                            </div>
                        </div>
                        {/* Div for button container in middle row i.e two buttons*/}
                        <div style = {styles.buttonContainer}>
                            <div style = {styles.midButtons}>
                                <img style = {styles.image} src="https://cdn-icons.flaticon.com/png/128/3318/premium/3318711.png?token=exp=1641963794~hmac=ed3fe6305584a517f20c57388d9fb407" alt= ''/>
                                <div onClick={this.changePage} style={{backgroundColor : 'lightgrey' , width : '5rem' , height : '5rem' , borderRadius : '50%'}}></div>
                                <img style = {styles.image} src="https://cdn-icons.flaticon.com/png/128/3318/premium/3318559.png?token=exp=1641963889~hmac=f418d34818b548c0eac4ec42e3b07796" alt= ''/>
                            </div>
                        </div>
                        {/* Div for button container in top row i.e only play-pause button*/}
                        <div style = {styles.buttonContainer}>
                            <div style = {styles.playButton}>
                                <img style = {styles.image} src="https://t4.ftcdn.net/jpg/00/98/69/33/240_F_98693323_3UYg7H6Os6ygn338NLSFLsQndXn56zO0.jpg" alt= ''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }  
}

// Style of ipod case
const styles = {
    ipodCase : {
        height : '30rem',
        width : '20rem',
        backgroundColor : 'black',
        margin : 'auto',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    wheelContainer : {
        height : '14rem',
        width : '100%',
        backgroundColor : 'lightgrey',
    },
    wheel : {
        width : '80%',
        height : '85%',
        backgroundColor : 'white',
        margin : '1rem auto',
        borderRadius : '50%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    buttonContainer : {
        width : '85%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    menuButton : {
        alignSelf:'center'
    },
    playButton : {
        alignSelf:'center'
    },
    midButtons : {
        alignSelf:'center',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    image: {
        alignSelf : 'center',
        width : '2rem',
        height : '2rem'
    },
}

export default Ipod;