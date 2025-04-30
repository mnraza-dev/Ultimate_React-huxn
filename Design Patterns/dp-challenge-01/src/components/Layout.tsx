import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Flex container for Sidebar + Main content */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-white">
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  )
}

export default Layout
