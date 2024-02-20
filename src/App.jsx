import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import NewsComp from './component/NewsComp';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/general' element={<NewsComp category='general' />} />
                <Route exact path='/business' element={<NewsComp category='business' />} />
                <Route exact path='/entertainment' element={<NewsComp category='entertainment' />} />
                <Route exact path='/health' element={<NewsComp category='health' />} />
                <Route exact path='/science' element={<NewsComp category='science' />} />
                <Route exact path='/sports' element={<NewsComp category='sports' />} />
                <Route exact path='/technology' element={<NewsComp category='technology' />} />
            </Routes>
            <Footer />

        </BrowserRouter>

    )
}

export default App