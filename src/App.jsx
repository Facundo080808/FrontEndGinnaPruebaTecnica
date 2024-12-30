import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Post from './views/Post/Post'; 
import { Update } from './views/Update/Update';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/create' element={<Post/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
