import React from 'react'
import ActionBar from '../ActionBar'

const ModalActions = ({ actions, ...props }) => {
  return (
    <div {...props}>
      <ActionBar data={actions} />
    </div>
  )
}

ModalActions.defaultProps = {
  actions: [],
}

export default ModalActions
