import React, { Component } from "react";
import BlogsPage from "../components/blogsPage";
import Home from "../components/Home";
import {Routes , Route} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div  className="tc" /*style={{backgroundImage : `url(${bg})`}} */ >
            <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/blogs' element={<BlogsPage />}></Route>
            </Routes>
            </div>
        );
    }
}

export default App;