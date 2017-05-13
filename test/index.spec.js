/* global describe, it, before */

import chai from 'chai';
import ramda from 'ramda';
import sanct from 'sanctuary';
import Immutable from 'immutable';
import toFantasyLand from '../lib/immutable-fantasy.js';

const ImmutableFL = toFantasyLand(Immutable);
const sanctuary = sanct.create({checkTypes: false, env: []});

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

  it('should be reduceble by sanctuary', () => {

    const list = List([1, 2, 3, 4]);
    // increase using Immutable API
    const immutableRes = list.reduce(ramda.add, 1);
    // increase using Sanctuary
    const sancRes = sanctuary.reduce(sanctuary.add, 1, list);

    expect(immutableRes).to.equal(sancRes);

  });

  it('should be chainable by ramda', () => {

    const ll = List.of(List.of(1, 2), List.of(3, 4));

    // increase using Immutable API
    const immutableRes = ll.flatten().map(ramda.add(1));
    // increase using Ramda
    const ramdaRes = ramda.chain(ramda.add(1), ll);

    expect(ramdaRes.equals(immutableRes)).to.be.true;

  });

  it('should be chainable by sanctuary', () => {

    const ll = List.of(List.of(1, 2), List.of(3, 4));

    // increase using Immutable API
    const immutableRes = ll.flatten().map(ramda.add(1));
    // increase using Sanctuary
    const sancRes = sanctuary.chain(sanctuary.add(1), ll);

    expect(sancRes.equals(immutableRes)).to.be.true;

  });

  it('should be filterable by ramda', () => {

    const l = List.of(1, 2, 3, 4);

    // increase using Immutable API
    const pred = x => x % 2 === 0;
    const immutableRes = l.filter(pred);
    const ramdaRes = ramda.filter(pred, l);

    expect(ramdaRes.equals(immutableRes)).to.be.true;

  });

  it('should be filterable by sanctuary', () => {

    const l = List.of(1, 2, 3, 4);

    const pred = x => x % 2 === 0;
    const immutableRes = l.filter(pred);
    const sancRes = sanctuary.filter(pred, l);

    expect(sancRes.equals(immutableRes)).to.be.true;

  });

});

describe('Seq', () => {

  it('should take 5 from infinite range and reduce it with add using ramda', () => {

    const range = ImmutableFL.Range();

    let resImmutable = range.take(5).reduce(ramda.add);
    let ramdaRes = ramda.reduce(ramda.add, 0, ramda.take(5, range));

    expect(ramdaRes).to.equal(resImmutable);

  });

  it('should take 5 from infinite range and reduce it with add using sanctuary', () => {

    const range = ImmutableFL.Range();

    let resImmutable = range.take(5).reduce(ramda.add);
    let resSanc = sanctuary.reduce(sanctuary.add, 0, sanctuary.take(5, range));

    expect(resSanc).to.equal(resImmutable);

  });

});
