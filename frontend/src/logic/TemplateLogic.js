import Store from '../mobx/TemplateStore'
export const fetchTemplates = async () => {
  try {
    const nextTemplates = await (
      await fetch('http://localhost:3001/templates')
    ).json()
    Store.setTemplates(nextTemplates)
  } catch (err) {
    console.error(err)
  }
}
