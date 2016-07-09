import test from 'ava';
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

function testFn(str){
  test(str, async t => {
    await hujiko(str).then( (cost) => {
      console.log(str, cost.calc)
    })
  })
}

const hujiko = require('../index.js')
testFn('すもももももももものうち')
testFn("くぁｗせｄｒｆｔｇｙふじこｌｐ；＠：")
testFn(`キーワードに誤字・脱字がないか確認します。
  別のキーワードを試してみます。
  もっと一般的なキーワードに変えてみます。
  キーワードの数を減らしてみます。`)