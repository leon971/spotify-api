import React, { Component } from 'react'
import Search from './Search'
import Playlists from './Playlists'
import axios from 'axios'
import Loggin from './Loggin'
import UserTracks from './UserTracks'

class PortfolioContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            portfolio: [],
            search_results: [],
            current_user: [],
            is_logged: 0,
            Userdisplay_name: '',
            user_tracks: [],
            user_tracks: []
        }
        this.handelChange = this.handelChange.bind(this)
        this.handleLoad = this.handleLoad.bind(this)
        this.addTrack = this.addTrack.bind(this)
        this.delTrack = this.delTrack.bind(this)
        this.logout = this.logout.bind(this)
    }

    delTrack(e) {
        e.preventDefault()

        const id = e.target.getAttribute('data-id')
        axios.post('http://localhost:3000/del_track', {
            id: id
        })
        .then((data)=>{
            this.handleLoad();
        })
        .catch((data) => {
            debugger
        })
    }
    

    addTrack(e){
        e.preventDefault()
        const id = e.target.getAttribute('data-id')
        axios.post('http://localhost:3000/add_track', {
            id: id
        })
        .then((data)=>{
            this.handleLoad();
        })
        .catch((data) => {
            debugger
        })
        

    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    handleLoad() {
        axios.post('http://localhost:3000/get_user_info', {
        })
        .then((data)=>{
            if (data.data.loggedin == 1){
                this.setState({
                    is_logged: 1,
                    current_user: [data.data.user_info],
                    user_tracks: [data.data.user_tracks]
                })
                this.setState({
                    Userdisplay_name: this.state.current_user[0].display_name
                })                
            } else {
                this.setState({
                    is_logged: 0
                })
            }
        })
        .catch((data) => {
            debugger
        })

        
    }

    handelChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })


        axios.post('http://localhost:3000/find_tracks', {
            q: e.target.value
        })
        .then((data) => {
            this.setState({
                search_results: [...data.data.tracks]
            })
        
        })
        .catch((data) => {
            
        })
    }

    logout(e){
        e.preventDefault()
        axios.post('http://localhost:3000/logout', {
        })
        .then((data) => {
            this.setState({
                    current_user: [data.data.user_info],
                    user_tracks: [data.data.user_tracks]
            })
        
        })
        .catch((data) => {
            
        })
        this.setState({
            is_logged: 0
        })
    }

    render(){
        return(
            <div>
                <Search searchResults={this.state.search_results} handleChange={this.handelChange} addTrack={this.addTrack} loggedin={this.state.is_logged} />
                <UserInfo is_logged={this.state.is_logged} Userdisplay_name={this.state.Userdisplay_name} current_user={this.state.current_user} tracks={this.state.user_tracks} delTrac={this.delTrack} logout={this.logout} />
            </div>
        )
    }
}

function UserInfo(props) {
    if(props.is_logged == 1){
        return <UserTracks Userdisplay_name={props.Userdisplay_name} current_user={props.current_user} tracks={props.tracks} del_trac={props.delTrac} logout={props.logout} />
    }

    return <Loggin />
}

export default PortfolioContainer