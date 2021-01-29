import { makeObservable, observable, action } from 'mobx'

class SnackbarStore {
  show = false
  title = ''
  description = ''
  duration = 3000

  constructor() {
    makeObservable(this, {
      show: observable,
      title: observable,
      description: observable,
      duration: observable,
      showSnackbar: action.bound,
      hideSnackbar: action.bound,
    })
  }

  showSnackbar({ title, duration, type, description }) {
    this.title = title
    this.duration = duration ?? this.duration
    this.description = description ?? this.description
    this.type = type
    this.show = true
  }

  hideSnackbar() {
    this.show = false
    this.title = ''
    this.description = ''
    this.duration = 3000
  }
}

const store = new SnackbarStore()

export default store
