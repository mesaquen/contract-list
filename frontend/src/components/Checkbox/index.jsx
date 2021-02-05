import React from 'react'
import PropTypes from 'prop-types'
import { FaCheck as Icon } from 'react-icons/fa'
import Typo from '../Typography'
import cx from 'classnames'
import './styles.scss'

const Checkbox = ({
  className,
  onClick,
  checked,
  value,
  label,
  name,
  ...props
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(!checked)
    }
  }
  const classNames = cx(['checkbox--container'], className)
  const iconClassNames = cx('checkbox--icon', {
    invisible: !checked,
  })

  return (
    <div className={classNames} onClick={handleClick} {...props}>
      <div className="checkbox--icon-container">
        <Icon className={iconClassNames} size="0.625rem" />
      </div>
      <Typo className="checkbox--label" size={Typo.S} variant="secondary">
        {label}
      </Typo>
      <input type="checkbox" className="hidden" value={value} name={name} />
    </div>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
}

export default Checkbox
