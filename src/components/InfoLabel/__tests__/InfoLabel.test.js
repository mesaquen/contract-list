import { cleanup, render } from '@testing-library/react'
import InfoLabel from '../index'

beforeEach(cleanup)

describe('InfoLabel', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<InfoLabel label="sample" info="info" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
