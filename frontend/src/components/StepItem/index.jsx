import React from 'react'
import Typography from '../Typography'
import { FaCheck as Icon } from 'react-icons/fa'
import cx from 'classnames'
import './styles.scss'

const StepItem = ({ done, label, active, left, right, ...props }) => {
  const spacingClass = 'stepItem--typo-left-spaced'
  const labelStyles = cx({
    [active ? 'stepItem-white' : 'stepItem-accent']: true,
  })
  const spacedLabelStyles = cx(spacingClass, labelStyles)

  const leftLabel = left ? (
    <Typography className={labelStyles} bold>
      {left}
    </Typography>
  ) : null
  const leftComponent = done ? (
    <Icon size="0.75rem" className={labelStyles} />
  ) : (
    leftLabel
  )
  const rightComponent = right ? (
    <Typography className={spacedLabelStyles} size={Typography.XXS}>
      {right}
    </Typography>
  ) : null

  const containerStyles = cx(['stepItem--container'], {
    'stepItem--container-active': active,
  })

  return (
    <div className={containerStyles} {...props}>
      {leftComponent}
      <Typography size={Typography.XS} className={spacedLabelStyles} semi>
        {label}
      </Typography>
      {rightComponent}
    </div>
  )
}

export default StepItem
