import React from 'react';
import Wheel from './Wheel';

class Ipod extends React.Component{
    constructor(){
        // We have to call the constructor of parent class that is super() as we are inheriting state constructor in our parent constructor
        super();
    }

    render = () => {
        return(
            <div style = {styles.ipodCase}>
                <Wheel />
            </div>
        );
    }
}

// Style of ipod case
const styles = {
    ipodCase : {
        height : '21rem',
        width : '18rem',
        backgroundColor : 'black',
        margin : 'auto',
        // We will display ipod items as flex and direction as coloumn
        display : 'flex',
        flexDirection : 'coloumn',
        justifyContent : 'center'

    }
}

export default Ipod;