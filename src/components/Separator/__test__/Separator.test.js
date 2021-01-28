import { cleanup, render } from '@testing-library/react'
import Separator from '../index'

beforeEach(cleanup)

describe('Separator', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Separator />)
    expect(asFragment()).toMatchSnapshot()
  })
})
