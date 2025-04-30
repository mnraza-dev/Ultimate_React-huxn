import React from 'react'
import Left from './components/Left'
import SplitScreen from './components/SplitScreen'
import Right from './components/Right'

const App = () => {
  return (
    <SplitScreen leftWeight={50} Rightweight={80} >
      <Left />
      <Right />
    </SplitScreen>
  )
}

export default App