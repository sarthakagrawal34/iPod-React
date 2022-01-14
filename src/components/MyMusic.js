import React from 'react';
import sound from '../assets/music/Despacito.mp3'

class MyMusic extends React.Component{

    constructor(){
        super();
        this.state = {
            // audio : null,
            ismounted: true
        }
    }


    componentDidMount(){
        let self = this;
        // const audioEl = document.getElementsByClassName("audio-element")[0];
        // // audioEl.play();
        // self.audio = audioEl;
        // self.audio.play();
        self.props.audio.play();

        // self.audio.addEventListener("timeupdate",function(){
        //     var pos = audioEl.currentTime/audioEl.duration;
        //     self.updateTime();
        //      document.getElementById("fill").style.width = pos*100 + "%";
        // })
        // self.audio.addEventListener("timeupdate",function(){
            self.props.audio.addEventListener("timeupdate",function(){
            if(self.state.isMounted){
                // var pos = audioEl.currentTime/audioEl.duration;
                var pos = self.props.audio.currentTime/self.props.audio.duration;
                self.updateTime();
                let fill = document.getElementById("fill");
                console.log(fill);
                if(fill !== null){
                    fill.style.width = pos*100 + "%";
                }
            }
        })
    }

    updateTime = () =>{
        this.setState({
            // audio : this.audio
            audio : this.props.audio
        })
    }

    componentWillUnmount(){
        this.state.isMounted = false;
    }

    render(){
        // let audio = this.state.audio;
        let audio = this.props.audio;
        return(
            <div style={styles.myMusicContainer}>

                <div style={styles.info}>
                    <img style={styles.image} src="https://www.guinnessworldrecords.com/Images/despacito%20header_tcm25-520895.jpg"></img>
                    <div style={styles.subInfo}>
                        {/* <h4>Song Name</h4>
                        <h5>Song Name</h5> */}
                        <h4 style={{marginBottom:'0.5rem'}}>Senorita</h4>
                        <p style={{marginBottom:'0'}}>Camilla Cobello</p>
                        <p>Louis Fonsi</p>
                    </div>
                </div>

                <div style={styles.statusBar}>
                    {/* <audio className="audio-element">
                        <source src={sound}></source>
                    </audio> */}
                    <p style={styles.currTime}>{audio !== null ? Math.floor(audio.currentTime) : '0 / 0'}</p>
                    <div style={styles.seekBar}>
                        <div style={styles.fill} id='fill'></div>
                    </div>
                    <p style={styles.dur}>{audio != null ? Math.floor(audio.duration) : '0 / 0'}</p>
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
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly'
    },
    subInfo : {
        alignSelf : 'center'
    },
    seekBar : {
        width:'70%',
        height:'20%',
        border : '1px solid grey',
        cursor: 'pointer',
        alignSelf : 'center',
        display: 'flex',
    },
    fill : {
        height: '100%',
        backgroundColor: 'royalblue',
    },
    currTime : {
        margin : '0',
        alignSelf : 'center'
    },
    dur : {
        margin : '0',
        alignSelf : 'center'
    }
}


export default MyMusic; 