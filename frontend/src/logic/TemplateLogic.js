import Store from '../mobx/TemplateStore'
import logger from '../utils/logger'
export const fetchTemplates = async () => {
  try {
    const nextTemplates = await (
      await fetch('http://localhost:3001/templates')
    ).json()
    Store.setTemplates(nextTemplates)
  } catch (err) {
    logger.error(err)
  }
}
