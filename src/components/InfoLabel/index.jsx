import React from 'react'
import PropTypes from 'prop-types'
import InfoIcon from '../InfoIcon'
import Typography from '../Typography'
import './styles.scss'

const InfoLabel = ({ label, info, ...props }) => {
  return (
    <div className="infoLabel--container" {...props}>
      <Typography size={Typography.S} variant="secondary" bold>
        {label}
      </Typography>
      <InfoIcon size="1.5rem" info={info} className="infoLabel--icon" />
    </div>
  )
}

InfoLabel.propTypes = {
  label: PropTypes.string,
  info: PropTypes.string,
}

export default InfoLabel
