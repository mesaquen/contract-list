import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style.scss'

const Button = ({ children, raised, primary, ...props }) => {
  const classNames = cx(['button'], {
    raised: raised || primary,
    primary,
  })

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  raised: PropTypes.bool,
  children: PropTypes.node,
}

export default Button
