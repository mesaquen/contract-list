import React from 'react'
import './styles.scss'

const ClickableArea = ({ children, ...props }) => {
  return (
    <div className="clickableArea--container" {...props}>
      {children}
    </div>
  )
}

export default ClickableArea
