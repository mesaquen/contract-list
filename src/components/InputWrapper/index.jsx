import React from 'react'
import cx from 'classnames'
import './styles.scss'
import Typography from '../Typography'

const InputWrapper = ({ label, left, right, className, children }) => {
  const classNames = cx('inputwrapper--container', className)
  return (
    <div className={classNames}>
      {label && (
        <div className="inputwrapper--label-container">
          <Typography
            size={Typography.S}
            className="inputwrapper--label"
            variant="secondary"
            bold
          >
            {label}
          </Typography>
        </div>
      )}
      <div className="inputwrapper--content">
        {left && <div className="inputwrapper--left">{left}</div>}
        <div className="inputwrapper--center">{children}</div>
        {right && <div className="inputwrapper--right">{right}</div>}
      </div>
    </div>
  )
}

export default InputWrapper
