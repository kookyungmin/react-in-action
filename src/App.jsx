import './App.css'
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BookingsPage from "./components/BookingsPage.jsx";
import BookablesPage from "./components/BookablesPage.jsx";
import UsersPage from "./components/UsersPage.jsx";

function App() {

  return (
      <Router>
          <header>
              <nav>
                  <ul>
                      <li>
                          <Link to={'/bookings'}>Bookings</Link>
                      </li>
                      <li>
                          <Link to={'/bookables'}>Bookables</Link>
                      </li>
                      <li>
                          <Link to={'/users'}>Users</Link>
                      </li>
                  </ul>
              </nav>
          </header>
          <Routes>
              <Route path={'/bookings'} element={<BookingsPage />} />
              <Route path={'/bookables'} element={<BookablesPage />} />
              <Route path={'/users'} element={<UsersPage />} />
          </Routes>
      </Router>
  )
}

export default App
