import React, { ReactNode } from 'react'
interface SplitScreenProps {
  children: [ReactNode, ReactNode],
  leftWeight?: number,
  Rightweight?: number
}
const SplitScreen: React.FC<SplitScreenProps> = ({ children, leftWeight, Rightweight }) => {
  const [left, right] = children;
  const leftWidth = `${leftWeight}rem`;
  const RightWidth = `${Rightweight}rem`;

  return (
    <section className='flex w-screen'>
      <div style={{ width: leftWidth }}>
        {left}
      </div>
      <div style={{ width: RightWidth }}>
        {right}
      </div>

    </section>
  )
}

export default SplitScreen