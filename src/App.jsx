import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseOverview from './pages/CourseOverview';
import HomePage from './pages/HomePage';

function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/course/:id" element={<CourseOverview />} />
    </Routes>
  </Router>
  )
}

export default App
