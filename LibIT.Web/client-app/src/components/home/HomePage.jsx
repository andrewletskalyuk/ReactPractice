import React, { Component } from 'react';

class HomePage extends Component {

    render() { 
        return ( <h1>{localStorage.getItem("token")}</h1> );
    }
}
 
export default HomePage;