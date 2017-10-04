import test from 'ava'
import * as Styled from './index'
import * as React from 'react'


test('text', t => {
  const Title = Styled.text({
    fontSize: 20
  })

  const element = React.createElement(Title)

  t.true(React.isValidElement(element))
})


test('view', t => {
  const Box = Styled.view({
    borderWidth: 2,
    paddingHorizontal: 12
  })

  const element = React.createElement(Box)

  t.true(React.isValidElement(element))
})