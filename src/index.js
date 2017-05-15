import FL from '../node_modules/fantasy-land';

const ticketToFantasyLand = (Immutable) => {

  let {Collection, Seq} = Immutable;

  // Extends main collection types from which others derive
  [Collection, Seq].forEach(({prototype}) => {

    prototype[FL.equals] = prototype.equals;
    prototype[FL.concat] = prototype.concat;
    prototype[FL.map] = prototype.map;
    prototype[FL.reduce] = prototype.reduce;

    prototype.chain = prototype[FL.chain] = function (fn) {
      return this.flatten(true).map(fn);
    };

    prototype.ap = prototype[FL.ap] = function (other) {
      return this.map(f => other.map(v => f(v))).flatten();
    };
  });

  ['Stack', 'Record', 'Set', 'OrderedSet', 'List', 'Map', 'OrderedMap'].forEach(type => {
    Immutable[type][FL.of] = (...args) => Immutable[type].of(...args);
    Immutable[type][FL.empty] = () => Immutable[type].of();
    Immutable[type].prototype[FL.empty] = () => Immutable[type].of();
  });

  return Immutable;
};

export default ticketToFantasyLand;
