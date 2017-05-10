# Immutable Fantasy

Implements Fantasy Land Spec for Facebook's Immutable Data Structures, extending its prototypes to make it work with other FP libraries that implement the spec.

## Still early days...accepting help!

## Scripts

* `npm run build` - produces production version of your library under the `lib` folder
* `npm run dev` - produces development version of your library and runs a watcher
* `npm run test` - well ... it runs the tests :)
* `npm run test:watch` - same as above but in a watch mode

## Basic Usage

```
import ticketToFantasyLand from 'immutable-fantasy';
import Immutable from 'immutable';
import R from 'ramda';

const ImmutableFL = ticketToFantasyLand(Immutable);
const {List} = ImmutableFL;

R.map(R.add(1), List.of(1, 2, 3, 4));
// List [2, 3, 4, 5];

R.reduce(R.add, List.of(1, 2, 3, 4));
// 10;

//and so on...
```