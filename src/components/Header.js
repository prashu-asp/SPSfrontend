import React,{ Component } from 'react';
import "./Header.css";
import Logo from '../images/logo.png'

class Header extends Component {
    render() {
        return  ( <div className='head'>
            
                <img className='team' src={Logo} />
                
                <h2 className='body-text1'>Blogs & Articles</h2>
                
            
        
         </div>   
        );
    }
}




export default Header;