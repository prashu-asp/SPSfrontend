import React, { Component } from 'react';
import Header from './Header';
import Blognav from './blognav';
import Footer from './footer';


class BlogsPage extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Header />
                <Blognav />
                <Footer />
            </div>
        );
    }
}
 
export  default BlogsPage;