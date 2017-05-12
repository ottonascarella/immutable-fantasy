/* global describe, it, before */

import chai from 'chai';
import ramda from 'ramda';
import sanctuary from 'sanctuary';
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
    const listResult = list.map(ramda.add(1));
    // increase using Ramda
    const listResultRamda = ramda.map(ramda.add(1), list);

    expect(listResult.equals(listResultRamda)).to.be.true;

  });

  it('should be mappable by sanctuary', () => {

    const list = List([1, 2, 3, 4]);
    // increase using Immutable API
    const immutableRes = list.map(ramda.add(1));
    // increase using Sanctuary
    const sanctuaryRes = sanctuary.map(sanctuary.add(1), list);

    expect(immutableRes.equals(sanctuaryRes)).to.be.true;

  });


  it('should be reduceble by ramda', () => {

    const list = List([1, 2, 3, 4]);
    // increase using Immutable API
    const reducedImmutable = list.reduce(ramda.add, 1);
    // increase using Ramda
    const reducedRamda = ramda.reduce(ramda.add, 1, list);

    expect(reducedImmutable).to.equal(reducedRamda);

  });

  it('should be chainable by ramda', () => {

    const ll = List().push(List([1, 2])).push(List([3, 4]));

    // increase using Immutable API
    const immutableRes = ll.flatten().map(ramda.add(1));
    // increase using Ramda
    const ramdaRes = ramda.chain(ramda.add(1), ll);

    expect(ramdaRes.equals(immutableRes)).to.be.true;

  });

  it('should be filterable by ramda', () => {

    const l = List.of(1, 2, 3, 4);

    // increase using Immutable API
    const pred = x => x % 2 === 0;
    const immutableRes = l.filter(pred);
    const ramdaRes = ramda.filter(pred, l);

    expect(ramdaRes.equals(immutableRes)).to.be.true;

  });

});
