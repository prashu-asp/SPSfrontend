import React, { Component } from "react";
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';

import { blogs } from '../components/blogs';
import Header from '../components/Header';
import Blognav from '../components/blognav';
import Footer from '../components/footer';

class App extends React.Component {
    render() {
        return (
            <div className="tc">
                <Header />
                <Blognav />
                <Footer />

            </div>
        );
    }
}

export default App;