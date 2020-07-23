import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from 'src/pages/index'

afterEach(cleanup)

describe('Home', () => {
  it('sample test', () => {
    const { getByText } = render(<Home />)
    expect(getByText('unfunctionals...')).toBeInTheDocument()
  })
})

