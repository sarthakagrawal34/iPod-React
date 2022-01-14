import React from 'react';
// import { ListGroup } from 'react-bootstrap';

class Settings extends React.Component{

    constructor(){
        super();
    }
    render(){
        // let self = this;
        return(
            <div style={styles.settings} >
                <img style={styles.image} src="https://cdn-icons.flaticon.com/png/512/2040/premium/2040504.png?token=exp=1642132441~hmac=0ae3f3da050ecebf300eadb3569e6644" />
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
        width:'75%',
        height:'75%',
        alignSelf : 'center'
    }
}



export default Settings; 