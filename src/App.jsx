import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseOverview from './pages/CourseOverview';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/course/:id" element={<CourseOverview />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </Router>
  )
}

export default App
