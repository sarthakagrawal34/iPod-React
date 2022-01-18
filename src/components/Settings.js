import React from 'react';

// Class component for Settings Screen
class Settings extends React.Component{
    render(){
        // let self = this;
        return(
            <div style={styles.settings} >
                {/* <img style={styles.image} src="https://cdn-icons.flaticon.com/png/512/2040/premium/2040504.png?token=exp=1642132441~hmac=0ae3f3da050ecebf300eadb3569e6644" /> */}
                <div style={styles.titleBar}>
                    <p style={{fontWeight:'bold'}}>iPod</p>
                    <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/31/31570.png" alt =''></img>
                </div>
                <div style={{width : '100%' , height : '60%',display:'flex' , flexDirection : 'row' , justifyContent: 'center'}}>
                    <img style={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTH06OX55tkjxome-n9Wdp4GIxPCsCTVd6kw&usqp=CAU" alt =''/>
                </div>
                <h1>Settings</h1>
            </div>
        );
    }
}

// Styles for Settings Screen Component
const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : "wrap"
    },
    image : {
        width:'80%',
        height:'100%',
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



export default Settings; 