import { observable, action, makeObservable } from 'mobx'

class ContractStore {
  contracts = []
  constructor() {
    makeObservable(this, {
      contracts: observable,
      setContracts: action.bound,
    })
  }

  setContracts(contracts) {
    this.contracts = contracts
  }
}

const store = new ContractStore()

export default store
