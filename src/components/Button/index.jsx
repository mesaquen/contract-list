import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style.scss'

const Button = ({ children, raised, primary, disabled, onClick, ...props }) => {
  const classNames = cx(['button'], {
    raised: raised || primary,
    primary,
    disabled,
  })

  const handleClick = () => {
    if (!disabled) {
      onClick?.call(null)
    }
  }

  return (
    <button className={classNames} onClick={handleClick} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  raised: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
}

export default Button
