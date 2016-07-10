import test from 'ava';
import util from 'util'
import tree from '../tree'

test("sandbox", async t => {
  const result = await tree("日本テレビ東京")
  console.log(util.inspect(result, { depth : null, colors: true, breakLength: 1}))
})
// test("sandbox", async t => {
//   const result = await tree("あいうえおかきくけこ")
//   console.log(util.inspect(result, { depth : null}))
// })