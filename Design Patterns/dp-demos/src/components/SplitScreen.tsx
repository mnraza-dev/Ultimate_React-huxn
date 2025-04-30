import React, { ReactNode } from 'react'
import Left from './Left'
import Right from './Right'
interface SplitScreenProps {
  children: [ReactNode, ReactNode],
  leftWeight?: number,
  Rightweight?: number
}
const SplitScreen: React.FC<SplitScreenProps> = ({ children, leftWeight, Rightweight }) => {
  const [left, right] = children

  return (
    <section>
      <div>
        {left}
      </div>
      <div>
        {right}
      </div>
      {children}

    </section>
  )
}

export default SplitScreen