import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/services/:servicesId">
            <Services></Services>
          </PrivateRoute>

          <Route path="/login">
            <LogIn></LogIn>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>

        </Switch>

        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
