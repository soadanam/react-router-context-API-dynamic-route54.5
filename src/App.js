import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contents from './components/Contents/Contents';
import Detail from './components/Detail/Detail';

import { createContext } from 'react';
export const RingContext = createContext('ring');


function App() {
  let valuableThing = 'Diamond';
  return (
    <RingContext.Provider value={valuableThing}>

      <div className="App">
        <BrowserRouter className='BrowserRouter'>
          <Navigation></Navigation>

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/header/' element={<Header />} />
            <Route path='/content' element={<Contents />} />
            <Route path='/header/about' element={<About />} />
            <Route path='/detail/:any' element={<Detail />} />
            <Route path='*' element={<NotFound />} />

          </Routes>

          <Footer></Footer>
        </BrowserRouter>

      </div>

    </RingContext.Provider>
  );
}

export default App;
