const { getTokenizer } = require('kuromojin')

const analyse = (text) => {
  return getTokenizer().then(tokenizer => {
    const lattice = tokenizer.getLattice(text) 
    const bestPath = tokenizer.viterbi_searcher.search(lattice);
    return { tokenizer, lattice, bestPath }
  })
}

module.exports = {
  analyse
}