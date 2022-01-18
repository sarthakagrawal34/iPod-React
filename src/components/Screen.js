import React from 'react';
import Home from './Home';
import Settings from './Settings';
import Games from './Games';
import Music from './Music';
// import Wallpapers from './Wallpapers';
import MyMusic from './MyMusic';
import Artists from './Artists';

// This component will contain all the screen which should be rendered and which should be the default active Item
class Screen extends React.Component{
    render(){
        return(
            <div style={styles.screen} id='screen-container'>
                {/* <Home /> */}
                {/* <Home activeItem={this.props.activeItem}/> */}
                {this.props.activePage==='Home'?<Home activeItem={this.props.activeItem}/> : null}
                {/* {this.props.activePage==='Wallpapers'?<Wallpapers activeItem={this.props.activeItem}/> : null} */}
                {this.props.activePage==='Music'?<Music activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Games'?<Games/> : null}
                {this.props.activePage==='Settings'?<Settings /> : null}
                {this.props.activePage==='MyMusic'?<MyMusic audio={this.props.audio}/> : null}
                {this.props.activePage==='Artists'?<Artists /> : null}
            </div>
        );
    }
}

// Styles for Screen Component
const styles = {
    screen : {
        height : '50%',
        width : '95%',
        borderRadius : '12px',
        backgroundColor : 'white',
        border : '2px solid black',
        marginTop : '1rem'
    }
}


export default Screen; 