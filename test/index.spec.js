/* global describe, it, before */

import chai from 'chai';
import R from 'ramda';
import Immutable from 'immutable';
import toFantasyLand from '../lib/immutable-fantasy.js';

const ImmutableFL = toFantasyLand(Immutable);

const {List} = ImmutableFL;

chai.expect();

const expect = chai.expect;

describe('List', () => {

  it('should be mappable by ramda', () => {

    const list = List([1, 2, 3, 4]);
    // increase using Immutable API
    const listResult = list.map(R.add(1));
    // increase using Ramda
    const listResultRamda = R.map(R.add(1), list);

    expect(listResult.equals(listResultRamda)).to.be.true;

  });

  it('should be reduceble by ramda', () => {

    const list = List([1, 2, 3, 4]);
    // increase using Immutable API
    const reducedImmutable = list.reduce(R.add, 1);
    // increase using Ramda
    const reducedRamda = R.reduce(R.add, 1, list);

    expect(reducedImmutable).to.equal(reducedRamda);

  });

  it('should be chainable by ramda', () => {

    const ll = List().push(List([1, 2])).push(List([3, 4]));

    // increase using Immutable API
    const immutable = ll.flatten().map(R.add(1));
    // increase using Ramda
    const ramda = R.chain(R.add(1), ll);

    expect(ramda.equals(immutable)).to.be.true;

  });

  it('should be filterable by ramda', () => {

    const l = List.of(1, 2, 3, 4);

    // increase using Immutable API
    const pred = x => x % 2 === 0;
    const immutable = l.filter(x => x % 2 === 0);
    const ramda = R.filter(pred, l);

    expect(ramda.equals(immutable)).to.be.true;

  });

});
