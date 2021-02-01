import React from 'react'
import cx from 'classnames'
import Typography from '../Typography'
import useI18n from '../../hooks/useI18n'
import { FaRegTrashAlt as Trash } from 'react-icons/fa'
import { MdEdit as Edit } from 'react-icon/md'
import './styles.scss'
import { CONTRACT_TYPES } from '../constants/contracts'

const ContractList = ({ data, className, ...props }) => {
  const { __ } = useI18n()
  const contractListStyles = cx('contractlist--container', className)

  const renderItem = item => {
    return (
      <div className="contractlist--item">
        <Typography key={item.id} size={Typography.S} variant="secondary">
          {item.description}
        </Typography>
        <Edit />
        <Trash />
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

export default ContractList
