// import test from 'ava';
// import hujiko from '../index.js'

// test('foo', t => {
//   t.plan(1)
//   console.log("a")
//   
//   hujiko("fuga", () => {
//     console.log("zzz")
//     t.pass();    
//   })
// });

const hujiko = require('../index.js')

hujiko("すもももももももものうち", () => {
  console.log("zzz")
})
hujiko("くぁｗせｄｒｆｔｇｙふじこｌｐ；＠：", () => {
  console.log("zzz")
})
hujiko(`キーワードに誤字・脱字がないか確認します。
別のキーワードを試してみます。
もっと一般的なキーワードに変えてみます。
キーワードの数を減らしてみます。`, () => {
  console.log("aaa")
})