import { cleanup, render } from '@testing-library/react'
import IconMessage from '../index'

beforeEach(cleanup)

describe('IconMessage', () => {
  test('renders correctly and match snapshot', () => {
    const { asFragment } = render(<IconMessage message="Sample" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
