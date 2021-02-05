import { render, cleanup } from '@testing-library/react'
import InfoIcon from '../index'

beforeEach(cleanup)

describe('InfoIcon', () => {
  test('Matches snapshot', () => {
    const { asFragment } = render(<InfoIcon info="Sample info" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
