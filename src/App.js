import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>

        <Header />

        <Routes>
          <Route path="/" element={<Home />}> </Route>
        </Routes>


        <Footer />

      </Router>
    </div>
  );
}

export default App;
