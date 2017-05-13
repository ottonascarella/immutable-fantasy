import FL from '../node_modules/fantasy-land';

const ticketToFantasyLand = (Immutable) => {

  let {Collection, List, Map, Seq} = Immutable;

  Collection.prototype[FL.equals] = Collection.prototype.equals;
  Collection.prototype[FL.concat] = Collection.prototype.concat;
  Collection.prototype[FL.map] = Collection.prototype.map;
  Collection.prototype[FL.reduce] = Collection.prototype.reduce;

  Collection.prototype.chain = function (fn) {
    return this.flatten(true).map(fn);
  };

  Collection.prototype[FL.ap] = function (other) {
    return this.map(f => other.map(v => f(v))).flatten();
  };

  //
  // LIST
  //
  List[FL.of] = (...args) => List.of(...args);
  List[FL.empty] = () => List.of();
  List.prototype[FL.empty] = () => List.of();

  //
  // MAP
  //
  Map[FL.of] = (...args) => Map.of(...args);
  Map[FL.empty] = () => Map.of();
  // Map.prototype[FL.empty] = () => Map.of();

  //
  // SEQ
  //
  Seq[FL.of] = (...args) => Seq.of(...args);
  Seq[FL.empty] = () => Seq.of();
  Seq.prototype[FL.empty] = () => Seq.of();

  //
  // RANGE
  //
  // Range[FL.of] = (...args) => Seq.of(...args);
  // Range[FL.empty] = () => Seq.of();
  // Range.prototype[FL.empty] = () => Seq.of();

  return Immutable;

};

export default ticketToFantasyLand;
