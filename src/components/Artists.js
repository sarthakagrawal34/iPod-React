import React from 'react';

class Artists extends React.Component{

    constructor(){
        super();
    }


    render(){
        return(
            <div style={styles.artistsContainer}>

                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    </div>

                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem'}}>IPod.js <span><img style={styles.image} src="https://cdn-icons.flaticon.com/png/128/2908/premium/2908584.png?token=exp=1642135861~hmac=8675b27d38f2b709d2016d1cb79b7ae1" /></span></h4>
                        <p style={{marginBottom:'0'}}> React Project</p>
                        <p>Made by : Sejal Gupta</p>
                    </div>

                </div>

                <div style={styles.info2}>
                <h5 style={{alignSelf : 'center'}}>Thanks for visiting the app !!</h5>
                </div>
            </div>
        );
    }

}

const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    imageContainer : {
        height : '65%',
        width : '35%',
        borderRadius : '50%',
        backgroundImage : `url("https://www.guinnessworldrecords.com/Images/despacito%20header_tcm25-520895.jpg")`,
        alignSelf : 'center'
    },
    image : {
        width: '2rem',
        height : '2rem'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    info2 : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    subInfo : {
        alignSelf : 'center'
    },
}

export default Artists; 