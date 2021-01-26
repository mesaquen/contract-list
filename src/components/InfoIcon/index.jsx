import React from 'react'
import PropTypes from 'prop-types'
import { MdInfo } from 'react-icons/md'
import './styles.scss'

const InfoIcon = ({ info, size, ...props }) => {
  return (
    <span title={info} {...props}>
      <MdInfo className="infoIcon--icon" size={size} />
    </span>
  )
}

InfoIcon.propTypes = {
  info: PropTypes.string,
  size: PropTypes.string,
}

InfoIcon.defaultProps = {
  size: '1.5rem',
}

export default InfoIcon
