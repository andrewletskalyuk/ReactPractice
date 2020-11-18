import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class NameInNavbar extends Component {

    render() {
        const email = localStorage.getItem("email");
        //console.log("email нашого користувача", email);
        return (
            <div>
                {email}
            </div>
        );
    }
}


export default NameInNavbar;