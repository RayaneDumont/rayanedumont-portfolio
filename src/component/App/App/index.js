import AboutMe from '../AboutMe';
import Footer from '../Footer';
import Header from '../Header';
import Homepage from '../Homepage';
import Music from '../Music';
import Projects from '../Projects';
import './styles.scss';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/music' element={<Music />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
