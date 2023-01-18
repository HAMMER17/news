import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Home from './pages/Home';
import Post from './pages/Post';


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

      </Routes>
    </div>
  );
}

export default App;
