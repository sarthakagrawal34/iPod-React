import React from 'react';
import Wheel from './Wheel';
import Screen from './Screen';

class Ipod extends React.Component{
    constructor(){
        // We have to call the constructor of parent class that is super() as we are inheriting state constructor in our parent constructor
        super();
    }

    render = () => {
        return(
            <div style = {styles.ipodCase}>
                <Screen/>
                <Wheel />
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
        flexDirection : 'coloumn',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'

    }
}

export default Ipod;