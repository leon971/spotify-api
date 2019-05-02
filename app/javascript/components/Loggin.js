import React, { Component } from 'react'


class Loggin extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="center_my user_my_loggin"><button className="button-dark" href="/auth/spotify"><a  href="/auth/spotify">Log In</a></button></div>
        )
    }
}

export default Loggin