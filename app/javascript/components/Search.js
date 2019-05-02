import React, { Component } from 'react'

class Search extends Component {
    constructor(props){
        super(props)
    }

    render(){
        var searchResults = this.props.searchResults.map(track => <div key={track.id} className="overview__related"><div className="related-artists"> <div className="related-artist" >

            <img src={track.album.images[2].url} height="64" width="64"/>
        <span className="related-artist__name">
        
        {track.name}
        {track.artists.slice(0, 3).map(item => {
          return <span> - {item.name}</span>;
        })}   
         
        </span>></div></div></div>)

        if (this.props.loggedin == 1){
            searchResults = this.props.searchResults.map(track => <div key={track.id} className="overview__related"><div className="related-artists"> <div className="related-artist" >
            <div className="on-left">
                <img src={track.album.images[2].url} height="64" width="64"/>
                <span className="related-artist__name">
            
                    {track.name}
                    {track.artists.slice(0, 3).map(item => {
                    return <span> - {item.name}</span>;
                    })}   
            
                </span>
            </div>
            <div className="on-left button_my_add">
                <span className="button-div"> 
                    <button className="button-dark ion-plus not-added" href="#" onClick={this.props.addTrack} data-id={track.id}>
                    </button>
                </span>
            </div>
            </div></div></div>)
        } 
        return(
            <div className="search_my">
                <h1 className="header head_my">Spotify App</h1>
                <form>
                    <div className="header"> 
                    <div className="search" >
                        <input onChange={this.props.handleChange} type="text" name="name" placeholder="Search" value={this.props.name} className="fi"> 
                        </input>
                    </div>
                    </div>
                </form>
                <div className="tracks">
                  {searchResults}
                </div>
            </div>
        )
    }
}


export default Search