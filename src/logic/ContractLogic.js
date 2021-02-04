import ContractStore from '../mobx/ContractStore'
export const fetchContracts = async () => {
  try {
    const nextContracts = await (
      await fetch('http://localhost:3001/contracts')
    ).json()
    ContractStore.setContracts(nextContracts)
  } catch (err) {
    console.error(err)
  }
}
