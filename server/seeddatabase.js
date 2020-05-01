const _ = require('underscore');

// Tours

const cancellationPolicies = [
  'For a full refund, cancel at least 24 hours in advance of the start date of the experience.',
  'Full refunds available for a very reasonable processing fee equal to admission price.',
  'All sales are final and incur 100% cancellation penalties.',
  'We will come for you if you try to cancel on us.',
];

const returnDetails = [
  'Returns to the original departure point',
  'Those who fall behind stay behind',
  'The rendezvous will be disclosed by carrier pigeon',
];

const conveyance = ['Walking', 'Bus', 'Bike', 'Hiking', 'Go-Kart'];

const locales = [
  {
    name: ['San Francisco', 'SF', 'Bay City'],
    boundaries: {
      north: 37.788915,
      east: -122.390197,
      south: 37.722464,
      west: -122.503719,
    },

  },
  {
    name: ['Telluride', 'Mount Wilson', 'San Joaquin', 'Mountain Town', 'Ski Ranch'],
    boundaries: {
      north: 38.026118,
      east: -107.782354,
      south: 37.897859,
      west: -108.047467,
    },
  },
];

// name
// overview
// return details

// create a collection of random lat and longs to turn into locations.

let latitude = _.random(south, north);
let longitude = _.random(east, west);

// create a description
