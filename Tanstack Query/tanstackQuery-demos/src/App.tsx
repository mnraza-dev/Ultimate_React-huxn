import React from 'react'
import WithoutTanstackQuery from './components/WithoutTanstackQuery'
import WithTanstackQuery from './components/WithTanstackQuery'

const App = () => {
  return (
    <div className='p-8 flex bg-amber-200'>

      {/* <WithoutTanstackQuery/> */}

      <WithTanstackQuery/>
    </div>
  )
}

export default App