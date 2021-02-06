import { makeObservable, obeservable, action, observable } from 'mobx'

class TemplateStore {
  templates = []

  constructor() {
    makeObservable(this, {
      templates: observable,
      setTemplates: action.bound,
    })
  }

  setTemplates(templates) {
    this.templates = templates
  }

  addTemplate(template) {
    this.templates = this.templates.concat(template)
  }
}

const store = new TemplateStore()

export default store
