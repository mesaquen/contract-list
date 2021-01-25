import { cleanup, render } from '@testing-library/react'
import Breadcrumb from '../index'

beforeEach(cleanup)

describe('Breadcrumbs', () => {
  const history = ['Page1', 'Page2']

  test('matches snapshot', async () => {
    const { asFragment } = render(<Breadcrumb data={history} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
