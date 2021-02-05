import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
const useQuery = () => new URLSearchParams(useLocation().search)
const ContractForm = () => {
  const params = useParams()

  const query = useQuery()
  return (
    <>
      <span>contract form {JSON.stringify(params)}</span>
      <span>{JSON.stringify(query.get('type'))}</span>
    </>
  )
}

export default ContractForm
