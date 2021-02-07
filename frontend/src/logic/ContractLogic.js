import ContractStore from '../mobx/ContractStore'
import logger from '../utils/logger'
export const fetchContracts = async () => {
  try {
    const nextContracts = await (
      await fetch('http://localhost:3001/contracts')
    ).json()
    ContractStore.setContracts(nextContracts)
  } catch (err) {
    logger.error(err)
  }
}
