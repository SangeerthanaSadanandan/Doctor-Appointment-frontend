
import './App.css';
import AllRest from './Components/AllRest';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import ViewDoc from './Components/ViewDoc';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>

      <section>
       <Routes>
          <Route path='/' element={<AllRest/>}/>
          <Route path='/view/:id' element={<ViewDoc/>}/>
       </Routes>
      </section>

      <footer>
        <Footer/>
      </footer>
      
    </div>
  );
}

export default App;
