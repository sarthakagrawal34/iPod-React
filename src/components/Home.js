import React from 'react';
import { ListGroup } from 'react-bootstrap';

class Home extends React.Component{
    constructor(){
        // We have to call the constructor of parent class that is super() as we are inheriting state constructor in our parent constructor
        super();
    }

    render(){
        let self = this;
        return(
            <div style={styles.homeScreen} id='home-screen'>
                <div style={styles.menuList} id='menu-list'>
                    <h2 style={{marginLeft:'12px'}}>IPod.js</h2>
                    {/* <ul>
                        <li>Wallpapers</li>
                        <li>Music</li>
                        <li>Games</li>
                        <li>Settings</li>
                    </ul> */}
                    <ListGroup>
                        {/* <ListGroup.Item style={{border:'0'}} active>Wallpapers</ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}}>Music</ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}}>Games</ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}}>Settings</ListGroup.Item> */}
                        <ListGroup.Item style={{border:'0'}} className={this.props.activeItem==='Wallpapers'?'active':''}>
                            Wallpapers {this.props.activeItem==='Wallpapers'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}} className={this.props.activeItem==='Music'?'active':''}>
                            Music {this.props.activeItem==='Music'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}} className={this.props.activeItem==='Games'?'active':''}>
                            Games {this.props.activeItem==='Games'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}} className={this.props.activeItem==='Settings'?'active':''}>
                            Settings {this.props.activeItem==='Settings'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div style={styles.imageContainer} id='image-container'>
                <img style={{height:'100%' , width:'100%'}} src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-1080p-Full-HD-Images.jpg" alt= ''/>
                </div>
            </div>
        );
    }

}

const styles = {
    homeScreen : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirecton : 'row'
    },
    menuList : {
        // border:'1px solid black',
        height : '100%',
        width : '50%'
    },
    imageContainer : {
        // border:'1px solid black',
        height : '100%',
        width : '50%'
    }
}

export default Home;