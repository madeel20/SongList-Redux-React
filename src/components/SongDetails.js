import React from 'react';
import { connect } from 'react-redux';
const SongDetails = ({song}) =>{
    if(!song){
        return <div> Select a song! </div>
    }
    return(
        
        <div> 
            <h1>Title : {song.name}</h1>
            <h2> Duration: {song.duration}</h2>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return { song: state.selectSong}
}
export default connect(mapStateToProps)(SongDetails);