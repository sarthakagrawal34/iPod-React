import React from 'react';

class Games extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div style={styles.settings} >
                <img style={styles.image} src="https://media.giphy.com/media/ASArOAGohOe1NFRhE1/giphy.gif" />
            </div>
        );
    }

}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    image : {
        width:'100%',
        height:'100%',
        alignSelf : 'center'
    }
}


export default Games; 