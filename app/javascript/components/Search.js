import React, { Component } from 'react'

class Search extends Component {
    constructor(props){
        super(props)
    }

    render(){
        var searchResults = this.props.searchResults.map(track => <div key={track.id} className="overview__related"><div className="related-artists"> <div className="related-artist" ><span className="related-artist__name">
         
        {track.name}
        {track.artists.map(item => {
          return <span> - {item.name}</span>;
        })}   
         
        
        </span></div></div></div>)

        if (this.props.loggedin == 1){
            searchResults = this.props.searchResults.map(track => <div key={track.id} className="overview__related"><div className="related-artists"> <div className="related-artist" ><span className="related-artist__name">{track.name}
            {track.artists.map(item => {
              return <span> - {item.name}</span>;
            })}   </span> <button className="button-dark ion-plus not-added" href="#" onClick={this.props.addTrack} data-id={track.id}></button></div></div></div>)
        } 
        return(
            <div className="search_my">
                <h1 className="header">Spotify App</h1>
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