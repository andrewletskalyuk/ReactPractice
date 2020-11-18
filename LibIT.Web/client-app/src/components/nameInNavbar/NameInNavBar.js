import { React, Component } from 'react';
//import { Link } from 'react-router-dom';

class NameInNavbar extends Component {
    state = {
        email: ''
    }
    
    // stateChange = () =>{
    //     const emailFormLocalStorage = localStorage.getItem("email");
    //     this.setState({
    //         [email]: emailFormLocalStorage
    //     });
    // }

    render() {
        console.log("email нашого користувача", this.state.email);
        return (
            <div>
                {this.state.email}
            </div>
        );
    }
}


export default NameInNavbar;