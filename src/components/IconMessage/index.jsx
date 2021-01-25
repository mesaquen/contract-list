import React from 'react'
import Typography from '../Typography'
import { MdWarning } from 'react-icons/md'
import './styles.scss'

const IconMessage = ({ message, ...props }) => {
  return (
    <div className="iconMessage--container" {...props}>
      <MdWarning size="1.5rem" className="iconMessage--icon" />
      <Typography className="iconMessage--message" size={Typography.S}>
        {message}
      </Typography>
    </div>
  )
}

export default IconMessage
