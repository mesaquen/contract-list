import React from 'react'
import './styles.scss'
import cx from 'classnames'

const ModalContent = ({ className, children, ...props }) => {
  const containerStyles = cx('modal--content-container', className)
  return (
    <div className={containerStyles} {...props}>
      {children}
    </div>
  )
}

export default ModalContent
