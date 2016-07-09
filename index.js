const { analyse } = require('./analyser')

const formatter = (node) => {
  return { 
    cost: node.cost,
    shortest_cost: node.shortest_cost,
    surface_form: node.surface_form, 
  }
}
const calc = (costs) => {
  const sum = costs.reduce( (prev, curr) => {
    return prev + curr.cost
  }, 0)
  return sum / costs.length
}
const hujiko = (str) => {
  return analyse(str).then( ({tokenizer, lattice, bestPath}) => {
    const costs = bestPath.map( node => {
      return Object.assign(formatter(node), {
        prev: formatter(node.prev)
      })
    })
    return {
      costs: costs,
      calc: calc(costs)
    }
  })
}

module.exports = hujiko
// module.exports.default = hujiko