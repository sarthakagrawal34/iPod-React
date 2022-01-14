import React from 'react';
import { ListGroup } from 'react-bootstrap';

class Home extends React.Component{
    render(){
        // let self = this;
        return(
            <div style={styles.homeScreen} id='home-screen'>
                <div style={styles.menuList} id='menu-list'>
                    {/* <h2 style={{marginLeft:'12px'}}>IPod.js</h2> */}
                    {/* <ul>
                        <li>Wallpapers</li>
                        <li>Music</li>
                        <li>Games</li>
                        <li>Settings</li>
                    </ul> */}
                    {/* <ListGroup> */}
                        {/* <ListGroup.Item style={{border:'0'}} active>Wallpapers</ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}}>Music</ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}}>Games</ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}}>Settings</ListGroup.Item> */}
                        
                        {/* <ListGroup.Item style={{border:'0'}} className={this.props.activeItem==='Wallpapers'?'active':''}>
                            Wallpapers {this.props.activeItem==='Wallpapers'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item> */}
                    <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                        <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/31/31570.png" alt =''></img>
                    </div>
                    <ListGroup style={{borderRadius:'0', padding: '0.2rem 0.6rem'}}>
                        <ListGroup.Item style={{border:'0'}} className={this.props.activeItem==='NowPlaying'?'active':''}>
                            Now Playing {this.props.activeItem==='NowPlaying'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0', padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Music'?'active':''}>
                            Music {this.props.activeItem==='Music'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0', padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Games'?'active':''}>
                            Games {this.props.activeItem==='Games'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0', padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Settings'?'active':''}>
                            Settings {this.props.activeItem==='Settings'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div style={styles.imageContainer} id='image-container'>
                    {/* <img style={{height:'100%' , width:'100%'}} src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-1080p-Full-HD-Images.jpg" alt= ''/> */}
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
        width : '50%',
        boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
        zIndex : '1'
    },
    imageContainer : {
        // border:'1px solid black',
        height : '100%',
        width : '50%',
        backgroundImage : 'url("https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-1080p-Full-HD-Images.jpg")',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        borderRadius : '0 12px 12px 0'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}



export default Home;