import React, { Component } from 'react'
import axios from 'axios'

class UserTracks extends Component {
    constructor(props){
        super(props)
    }

    

    render(){
        console.log(this.props.tracks[0])
        const userTracks = this.props.tracks[0].map(track => <div key={track.id} className="overview__related"><div className="related-artists"> <div className="related-artist" >
        <span className="related-artist__name">
         
        {track.name}
        {track.artists.map(item => {
          return <span> - {item.name}</span>;
        })}   
         
        </span> <button className="button-light" href="#" onClick={this.props.del_trac} data-id={track.id}>Remove </button></div></div></div>)
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