//Import Area
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Error404 from './page/Error404';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';


//RFC
function App() {
    //1. State

    //2. Functions

    //3. Return Statement JSX
    return (
      <Router>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login.html" element={ <Login /> } />
            <Route path="/register.html" element={ <Register /> } />
            <Route path="*" element={ <Error404 /> } />
        </Routes>
      </Router>
    );
}

export default App;