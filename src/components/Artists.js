import React from 'react';
import artistImage from '../assets/images/artist.jpg';

class Artists extends React.Component{
    render(){
        return(
            <div style={styles.artistsContainer}>
                <div style={styles.titleBar}>
                    <p style={{fontWeight:'bold'}}>iPod</p>
                    <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/31/31570.png" alt =''></img>
                </div>
                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    </div>
                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem'}}>IPod.js <span><img style={styles.image} src="https://cdn-icons.flaticon.com/png/512/471/premium/471713.png?token=exp=1642144331~hmac=b75239e6498d362f690f67e3d4ea2a35" alt =''/></span></h4>
                        <p style={{marginBottom:'0'}}> React Project</p>
                        <p>Made by : Sarthak Agrawal</p>
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
        // backgroundImage : `url("https://www.guinnessworldrecords.com/Images/despacito%20header_tcm25-520895.jpg")`,
        backgroundImage : `url(${artistImage})`,
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



export default Artists; 