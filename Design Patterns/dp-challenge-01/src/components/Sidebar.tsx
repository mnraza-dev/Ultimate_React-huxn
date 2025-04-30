const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-100 border-r p-4">
          <nav>
            <ul className="space-y-2">
              <li><a href="#" className="block p-2 rounded hover:bg-gray-200">Home</a></li>
              <li><a href="#" className="block p-2 rounded hover:bg-gray-200">Profile</a></li>
              <li><a href="#" className="block p-2 rounded hover:bg-gray-200">Settings</a></li>
            </ul>
          </nav>
        </aside>
    )
}

export default Sidebar