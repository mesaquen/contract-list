import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Typography from '../Typography'
import useI18n from '../../hooks/useI18n'
import { FaRegTrashAlt as Trash } from 'react-icons/fa'
import { MdEdit as Edit } from 'react-icons/md'
import './styles.scss'

const ContractList = ({ data, className, onEdit, onDelete, ...props }) => {
  const { __ } = useI18n()
  const contractListStyles = cx('contractlist--container', className)

  const handleEdit = id => onEdit?.call(null, id)
  const handleDelete = id => onDelete?.call(null, id)

  const renderItem = item => {
    return (
      <div className="contractlist--item">
        <Typography
          className="contractlist--item-title"
          key={item.id}
          size={Typography.S}
          variant="secondary"
        >
          {item.description}
        </Typography>
        <Edit className="icon" onClick={() => handleEdit(item.id)} />
        <Trash className="icon" onClick={() => handleDelete(item.id)} />
      </div>
    )
  }

  const renderWarning = () => {
    return (
      <Typography variant="secondary" size={Typography.S}>
        {__('no.contract.warning')}
      </Typography>
    )
  }

  if (data?.length) {
    const items = data.map(renderItem)
    return <div className={contractListStyles}>{items}</div>
  }

  return renderWarning()
}

ContractList.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default ContractList
