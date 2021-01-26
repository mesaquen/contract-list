import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './styles.scss'

const Card = ({ children, className, compact, round, ...props }) => {
  const classNames = cx(className, ['card--container'], {
    'card--container-round': round,
    'card--container-extra-padding': !compact,
  })
  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  round: PropTypes.bool,
  compact: PropTypes.bool,
}

Card.defaultProps = {
  round: true,
}

export default Card
