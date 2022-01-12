import React from 'react';

// Class component for wheel of Ipod
class Wheel extends React.Component{
    constructor(){
        // We have to call the constructor of parent class that is super() as we are inheriting state constructor in our parent constructor
        super();
    }

    // Rendering the component
    render = () => {
        return(
            // Wheel Container div
            <div style = {styles.wheelContainer} className='wheel-container'>
                {/* Wheel div */}
                <div style = {styles.wheel}>
                    {/* Div for button container in top row i.e only menu button*/}
                    <div style = {styles.buttonContainer}>
                        {/* Menu button div */}
                        <div style = {styles.menuButton}>
                            <img style = {styles.image} src="https://cdn-icons-png.flaticon.com/128/168/168214.png" />
                        </div>
                    </div>
                    {/* Div for button container in middle row i.e two buttons*/}
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.midButtons}>
                            <img style = {styles.image} src="https://cdn-icons.flaticon.com/png/128/3318/premium/3318711.png?token=exp=1641963794~hmac=ed3fe6305584a517f20c57388d9fb407" />
                            <div style={{backgroundColor : 'lightgrey' , width : '5rem' , height : '5rem' , borderRadius : '50%'}}></div>
                            <img style = {styles.image} src="https://cdn-icons.flaticon.com/png/128/3318/premium/3318559.png?token=exp=1641963889~hmac=f418d34818b548c0eac4ec42e3b07796" />
                        </div>
                    </div>
                     {/* Div for button container in top row i.e only play-pause button*/}
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.playButton}>
                            <img style = {styles.image} src="https://t4.ftcdn.net/jpg/00/98/69/33/240_F_98693323_3UYg7H6Os6ygn338NLSFLsQndXn56zO0.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Styles for wheel container, wheel and all buttons
const styles = {
    wheelContainer : {
        height : '13rem',
        width : 'inherit',
        alignSelf : 'flex-end',
        backgroundColor : 'lightgrey'
    },
    wheel : {
        width : '15rem',
        height : 'inherit',
        backgroundColor : 'white',
        margin : 'auto',
        borderRadius : '50%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    buttonContainer : {
        width : '85%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    menuButton : {
        alignSelf:'center'
    },
    playButton : {
        alignSelf:'center'
    },
    midButtons : {
        alignSelf:'center',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    image: {
        alignSelf : 'center',
        width : '2rem',
        height : '2rem',
    },

}

// Export the wheel component
export default Wheel; 