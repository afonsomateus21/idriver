import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { GlobalStyle } from './styles/global';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserRegister } from './pages/UserRegister';
import { PrivateRoutes } from './utils/PrivateRoute';
import { SearchUser } from './pages/SearchUser';

export function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/users" element={ <Home /> } />
          <Route path="/register-user" element={ <UserRegister /> } />
          <Route path="/search-user" element={ <SearchUser /> } />
        </Route>  
        <Route path="/" element={ <Login /> } />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

