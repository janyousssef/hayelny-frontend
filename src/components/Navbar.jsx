import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <Router>
            <div
            className="bg-[#50A9E3] p-4"
        >
            <div className="flex justify-around items-center">
                <div className="flex gap-2 items-center">
                    <img src={logo} alt="logo" className='w-1/2 h-10' />
                    <p className="font-bold text-white text-xl">Hayelny.Ai</p>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-white font-semibold">Sign up</Link>
                    <Link to="/" className="text-white font-semibold">Login</Link>
                    <Link to="/" className="text-[#50A9E3] bg-white rounded-full px-2 p-1">Upload</Link>
                </div>
            </div>
        </div>
        </Router>
    )
}

export default Navbar