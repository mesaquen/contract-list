import React from 'react'
import { FaCheck, FaTimes, FaExclamation } from 'react-icons/fa'
import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import Typo from '../Typography'
import store from '../../mobx/SnackbarStore'
import './styles.scss'

const TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
}

const Snackbar = observer(() => {
  const { show, title, description, type } = store
  if (!show) {
    return null
  }
  const getIcon = actionType => {
    const iconProps = {
      size: '1.5rem',
    }

    switch (actionType) {
      case TYPES.SUCCESS:
        return <FaCheck {...iconProps} />
      case TYPES.ERROR:
        return <FaExclamation {...iconProps} />
      default:
        return null
    }
  }
  const icon = getIcon(type)

  const snackbarClassNames = cx('snackbar--container', {
    'snackbar--container-show': show,
  })

  const iconContainerClassNames = cx('snackbar--icon-container', {
    [type ? `snackbar--icon-container-${type}` : '']: true,
  })

  const titleClassNames = cx('snackbar--title', {
    [type ? `snackbar--title-${type}` : '']: true,
  })
  return (
    <div className={snackbarClassNames}>
      <div className={iconContainerClassNames}>{icon}</div>
      <div className="snackbar--content-container">
        <Typo size={Typo.S} className={titleClassNames} bold>
          {title}
        </Typo>
        <Typo size={Typo.S}>{description}</Typo>
      </div>
      <div className="snackbar--action-container">
        <FaTimes onClick={store.hideSnackbar} />
      </div>
    </div>
  )
})

export default Snackbar
