const kuromoji = require('kuromoji')
const dicPath = __dirname + '/node_modules/kuromoji/dist/dict'

class MyFormatter {
  formatEntry(word_id, position, type, features) {
    console.log(features)
    var token = {};
    token.word_id = word_id;
    token.word_type = type;
    token.word_position = position;

    token.surface_form = features[0];
    token.pos = features[1];
    token.pos_detail_1 = features[2];
    token.pos_detail_2 = features[3];
    token.pos_detail_3 = features[4];
    token.conjugated_type = features[5];
    token.conjugated_form = features[6];
    token.basic_form = features[7];
    token.reading = features[8];
    token.pronunciation = features[9];

    return token;
  }
  formatUnknownEntry(word_id, position, type, features, surface_form) {
    var token = {};
    token.word_id = word_id;
    token.word_type = type;
    token.word_position = position;

    token.surface_form = surface_form;
    token.pos = features[1];
    token.pos_detail_1 = features[2];
    token.pos_detail_2 = features[3];
    token.pos_detail_3 = features[4];
    token.conjugated_type = features[5];
    token.conjugated_form = features[6];
    token.basic_form = features[7];
    // token.reading = features[8];
    // token.pronunciation = features[9];
    return token;
  }
};

const hujiko = (str, cb) => {
  const b = kuromoji.builder({dicPath: dicPath})
  b.build(function(err, tokenizer){
    // const path = tokenizer.tokenize(str)
    // console.log(path);
    const lat = tokenizer.getLattice(str)
    const bestPath = tokenizer.viterbi_searcher.search(lat);
    // console.log(bestPath)
    const costs = bestPath.map( node => {
      return { 
        cost: node.cost,
        shortest_cost: node.shortest_cost,
        surface_form: node.surface_form, 
      }
    })
    console.log(costs)
    // const costs = lat.nodes_end_at.map( l => ([l.cost, l.surface_form] ) )
    // console.log(lat.nodes_end_at)
    // console.log(JSON.stringify(lat.nodes_end_at, null, 2))
    cb()
  })
}

module.exports = hujiko
// module.exports.default = hujiko