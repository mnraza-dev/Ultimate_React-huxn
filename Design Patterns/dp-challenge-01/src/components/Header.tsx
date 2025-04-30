
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-green-800 px-4 py-2 flex justify-between items-center '>
      <Link to='/'>My Dashboard</Link>

      <div className='flex gap-2'>
        <Link to='/profile'>Profile</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </header>
  )
}

export default Header