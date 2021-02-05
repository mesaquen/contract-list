import React from 'react'
import PropTypes from 'prop-types'
import { MdClose as Icon } from 'react-icons/md'
import Typo from '../Typography'
import Separator from '../Separator'

const ModalHeader = ({ title, onClick }) => {
  return (
    <>
      <div className="modal--title">
        <Typo bold>{title}</Typo>
        {onClick && <Icon className="icon" size="1.5rem" onClick={onClick} />}
      </div>
      <Separator />
    </>
  )
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default ModalHeader
