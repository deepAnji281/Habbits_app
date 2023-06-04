
import Create from './component/Create';
import View from './component/View';
import NavBar from './component/NavBar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home';
function App() {
  return (
    <div className="App">
     <BrowserRouter>

      <Routes>
      <Route exec path='/' element={<><NavBar/><Home/></>}/>
        <Route exec path='/create' element={<><NavBar/> <Create/></>} />
        <Route exec path='/view'  element={<View/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
