import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Countries from './pages/Countries';
import Home from './pages/Home';
import PageCountry from './pages/PageCountry';
import Post from './pages/Post';
import User from './pages/User';


function App() {
  const [icon, setIcon] = useState(false)
  const [theme, setTheme] = useState('light')
  const changeIcon = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    setIcon(!icon)
  }

  return (
    <div className="App" data-theme={theme}>
      <Navbar icon={icon} changeIcon={changeIcon} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<Post />} />
        <Route path='/:id' element={<User />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/country/:name' element={<PageCountry />} />
      </Routes>
    </div>
  );
}

export default App;
