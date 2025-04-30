const Header = () => {
  return (
    <header className='bg-teal-800 px-4 py-2 flex justify-between items-center '>
      <a href='/' className="text-white text-xl font-medium">My Dashboard</a>
      <div className='flex gap-2'>
        <a className="text-white text-lg" href='/profile'>Profile</a>
        <a className="text-white text-lg" href="/logout">Logout</a>
      </div>
    </header>
  )
}

export default Header