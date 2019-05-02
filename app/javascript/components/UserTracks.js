import React, { Component } from 'react'
import axios from 'axios'

class UserTracks extends Component {
    constructor(props){
        super(props)
    }

    

    render(){
        const userTracks = this.props.tracks[0].map(track => <div key={track.id} className="overview__related"><div className="related-artists"> <div className="related-artist" >
        <div className="on-left">
            <img src={track.album.images[2].url} height="64" width="64"/>
            <span className="related-artist__name">
            
            {track.name}
            {track.artists.slice(0, 3).map(item => {
            return <span> - {item.name}</span>;
            })}   
            
            </span>
        </div>
        <div className="on-left button_my"> 
            <span className="button-div"> 
                <button className="button-light" href="#" onClick={this.props.del_trac} data-id={track.id}>Remove </button>
            </span>
        </div>
        </div></div></div>)
        
        return(
            <div className="user_my">
           
            <div className="artist__header" >
            
                <div className="artist__info">
                    <div className="profile__img">
                        <img src={this.props.current_user[0].images[0].url} height="42" width="42"/>
                        <div className="artist__info__meta">
                            <div className="artist__info__name">
                            {this.props.current_user[0].display_name}
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="tracks">
                {userTracks}  
            </div>
            <div>
            <button className="button-light" href="#" onClick={this.props.logout}>Log Out</button>
                </div>
            </div>
        )
        
    }
}

export default UserTracks