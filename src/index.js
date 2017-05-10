import FL from '../node_modules/fantasy-land';

const ticketToFantasyLand = (Immutable) => {

  const {Collection} = Immutable;

  Collection.prototype[FL.map] = Collection.prototype.map;

  Collection.prototype.chain = function (fn) {
    return this.flatten(true).map(fn);
  };

  Collection.prototype[FL.chain] = Collection.prototype.chain;

  Collection.prototype[FL.reduce] = Collection.prototype.reduce;

  Collection.prototype[FL.ap] = function (other) {
    return this.map(f => other.map(v => f(v))).flatten();
  };

  return Immutable;

};

export default ticketToFantasyLand;
