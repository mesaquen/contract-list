import React from 'react'
import cx from 'classnames'
import Typo from '../Typography'
import Button from '../Button'
import './styles.scss'
import { generateTestIds } from './data'

const ActionHeader = ({
  className,
  title,
  subtitle,
  buttonLabel,
  onClick,
  compact,
  dataTestId,
  ...props
}) => {
  const classNames = cx('actionHeader--container', className)
  const titleSize = compact ? Typo.M : Typo.XL
  const testIds = generateTestIds(dataTestId)

  const buttonComponent =
    onClick && buttonLabel ? (
      <Button onClick={onClick} raised data-testid={testIds.button}>
        {buttonLabel}
      </Button>
    ) : null

  return (
    <div className={classNames} {...props} data-testid={testIds.component}>
      <div className="actionHeader--label-container">
        <Typo size={titleSize} bold>
          {title}
        </Typo>
        {subtitle && (
          <Typo size={Typo.S} className="actionHeader--subtitle">
            {subtitle}
          </Typo>
        )}
      </div>
      {buttonComponent}
    </div>
  )
}

export default ActionHeader
