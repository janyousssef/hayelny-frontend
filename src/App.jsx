import './index.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
    <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
