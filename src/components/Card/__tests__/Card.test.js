import { cleanup, render } from '@testing-library/react'
import Card from '../index'

beforeEach(cleanup)

const renderComponent = (props = {}) => (
  <Card {...props}>
    <span>sample</span>
  </Card>
)

describe('Card', () => {
  it('matches snapshot on compact layout', () => {
    const { asFragment } = render(renderComponent({ compact: true }))
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches snapshot on default layout', () => {
    const { asFragment } = render(renderComponent())
    expect(asFragment()).toMatchSnapshot()
  })

  it('matches snapshot on square edges', () => {
    const { asFragment } = render(renderComponent({ round: false }))
    expect(asFragment()).toMatchSnapshot()
  })
})
