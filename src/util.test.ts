import test from 'ava'
import * as Util from './util'
import { ILayout } from './types'


test('normalizeLayout', t => {
  const style: ILayout = {paddingHorizontal: 12, marginVertical: 6}
  Util.normalizeLayout(style)

  t.deepEqual(
    style,
    {
      paddingLeft: 12,
      paddingRight: 12,
      marginTop: 6,
      marginBottom: 6
    }
  )
})