const { analyse } = require('./analyser')

const concat = (ll, res = []) => {
  if(ll === null){
    return res
  }
  if(ll.surface_form){
    res.unshift(ll.surface_form)
  }
  return concat(ll.prev, res)
}

const format = (ll) => {
  if(ll === null){
    return null
  }
  if(ll.cost === 0 && ll.surface_form === undefined){
    return null
  }

  return {
    // left_id: ll.left_id,
    // right_id: ll.right_id,
    // name: ll.name,
    // cost: ll.cost,
    // surface_form: ll.surface_form,
    // c: ll.cost,
    // sc: ll.shortest_cost,
    // m: ll.surface_form,
    p: format(ll.prev),
    // v: `${ll.surface_form}(${ll.cost} / ${ll.shortest_cost})`,
    v: `${ll.surface_form}(${ll.cost})`,
    // con: concat(ll)
  }
}

const trees = (lls) => {
  return lls.map(ll => format(ll))
}

const treeFn = (str) => {
  return analyse(str).then( ({lattice}) => {
    // const lats = lattice.nodes_end_at.reverse()
    // const tree = lats.map( ll => trees(ll))
    // console.log(lat)
    const lat = lattice.nodes_end_at.reverse()[1]
    const tree = lat.map( ll => format(ll))
    return tree
  })
}
module.exports = treeFn
// module.exports.default = treeFn