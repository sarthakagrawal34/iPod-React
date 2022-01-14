import React from 'react';
import Home from './Home';
import Settings from './Settings';
import Games from './Games';
import Music from './Music';
import Wallpapers from './Wallpapers';
import MyMusic from './MyMusic';
import Artists from './Artists';

class Screen extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div style={styles.screen} id='screen-container'>
                {/* <Home /> */}
                {/* <Home activeItem={this.props.activeItem}/> */}
                {this.props.activePage==='Home'?<Home activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Wallpapers'?<Wallpapers activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Music'?<Music activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Games'?<Games/> : null}
                {this.props.activePage==='Settings'?<Settings /> : null}
                {this.props.activePage==='MyMusic'?<MyMusic /> : null}
                {this.props.activePage==='Artists'?<Artists /> : null}
            </div>
        );
    }

}

const styles = {
    screen : {
        height : '16rem',
        width : '100%',
        backgroundColor : 'white',
        border : '2px solid lightgrey'
    }
}

export default Screen; 