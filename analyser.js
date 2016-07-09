const { getTokenizer } = require('kuromojin')

const getLattice = (text) => {
  return getTokenizer().then(tokenizer => {
    return { tokenizer: tokenizer, lattice: tokenizer.getLattice(text) }
  })
}
const bestPath = (text) => {
  return getLattice().then( ({tokenizer, lattice}) => {
    return tokenizer.viterbi_searcher.search(lattice);
  })
} 
const analyse = (text) => {
  return getTokenizer().then(tokenizer => {
    const lattice = tokenizer.getLattice(text) 
    const bestPath = tokenizer.viterbi_searcher.search(lattice);
    return { tokenizer, lattice, bestPath }
  })
}

module.exports = {
  getLattice, bestPath, analyse
}