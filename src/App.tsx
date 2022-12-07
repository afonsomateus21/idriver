import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { GlobalStyle } from './styles/global';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserRegister } from './pages/UserRegister';
import { Header } from './components/Header';
import { PrivateRoutes } from './utils/PrivateRoute';

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/users" element={ <Home /> } />
          <Route path="/register-user" element={ <UserRegister /> } />
        </Route>  
        <Route path="/" element={ <Login /> } />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

