import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import cx from 'classnames'
import './styles.scss'

const ActionBar = ({ data, className, ...props }) => {
  const containerStyles = cx('actionbar--container', className)
  const firstItemStyles = cx('actionbar--first', {
    'actionbar--first-center': data.length === 1,
  })
  const items = data.slice(0, 3)

  const renderButton = (item, options = {}) => (
    <Button
      key={item.title}
      onClick={item.action}
      raised={options.raised}
      primary={options.primary}
      disabled={item.disabled}
    >
      {item.title}
    </Button>
  )

  const renderRaisedButton = item => renderButton(item, { raised: true })
  const renderPrimaryButton = item => renderButton(item, { primary: true })

  const renderItems = (item, index, list) => {
    if (index === 0) {
      return <div className={firstItemStyles}>{renderButton(item)}</div>
    } else if (index === list.length - 1) {
      return <div className="actionbar--last">{renderPrimaryButton(item)}</div>
    }

    return renderRaisedButton(item)
  }

  return <div className={containerStyles}>{items.map(renderItems)}</div>
}

ActionBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
    })
  ).isRequired,
}

export default ActionBar
