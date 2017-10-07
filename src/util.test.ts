import test from 'ava'
import * as Util from './util'
import { ITextStyle } from './types'


test('normalizeLayout', t => {
  const style: ITextStyle = {paddingHorizontal: 12, marginVertical: 6}
  Util.normalizeStyle(style)

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