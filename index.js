const { analyse } = require('./analyser')

const formatter = (node) => {
  return { 
    cost: node.cost,
    shortest_cost: node.shortest_cost,
    surface_form: node.surface_form, 
  }
}
const calc = (costs) => {
  // costs.count
}
const hujiko = (str) => {
  return analyse(str).then( ({tokenizer, lattice, bestPath}) => {
    const costs = bestPath.map( node => {
      return Object.assign(formatter(node), {
        prev: formatter(node.prev)
      })
    })
    console.log(costs)
    return costs    
  })
}

module.exports = hujiko
// module.exports.default = hujiko