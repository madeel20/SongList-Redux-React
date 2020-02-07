import { combineReducers } from 'redux';

const songListReducer = () =>{
    return (
        [
        {name: 'Senorita', duration: '3:45'},
        {name: 'Despacito', duration: '2:50'},
        {name: 'Dre',duration: '3:00'}
        ])
};

const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SELECT_SONG'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    selectSong: selectedSongReducer,
    songList: songListReducer
});
