import React from 'react';
import sound from './assets/music/Despacito.mp3'

class MyMusic extends React.Component{

    constructor(){
        super();
    }


    componentDidMount(){
        const audioEl = document.getElementsByClassName("audio-element")[0];
        audioEl.play();
    }

    render(){
        return(
            <div style={styles.myMusicContainer}>

                <div style={styles.info}>
                    <img style={styles.image} src="https://www.guinnessworldrecords.com/Images/despacito%20header_tcm25-520895.jpg"></img>
                    <div style={styles.subInfo}>
                        <h4>Song Name</h4>
                        <h5>Song Name</h5>
                    </div>

                </div>

                <div style={styles.statusBar}>
                    <audio className="audio-element">
                        <source src={sound}></source>
                    </audio>
                </div>

            </div>
        );
    }

}

const styles = {
    myMusicContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    image : {
        height : '75%',
        width : '45%',
        alignSelf : 'center'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    statusBar : {
        width : '100%',
        height : '30%'
    },
    subInfo : {
        alignSelf : 'center'
    }
}


export default MyMusic; 