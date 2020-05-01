const _ = require('underscore');
const faker = require('faker');
// Tours

module.exports = function (models) {
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

  const conveyance = ['Walking', 'Bus', 'Bike', 'Hiking', 'Go-Kart', 'Wine Tour', 'Daydrinking', 'Strolling'];

  const titleChunk = ['Tour Of', 'Through', 'Across', 'Around'];

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

  function pickrand(array) {
    const max = array.length -1;
    const i = _.random(0, max);
    return array[i];
  }

  function makeTitle(locale) {
    const myConveyance = pickrand(conveyance);
    const myTitlechunk = pickrand(titleChunk);
    const myLocale = pickrand(locale['name']);
    const title = `${myConveyance} ${myTitlechunk} ${myLocale}`;
    return title;
  }

  for (let i = 0; i < 30; i++) {
    const locale = locales[pickrand([0, 1])];
    const name = makeTitle(locale);
    const coords = locale.boundaries;
    const latitude = Math.random() * (coords.north - coords.south) + coords.south;
    const longitude = Math.random() * (coords.east - coords.west) + coords.west;
    const description = faker.lorem.sentences();
    let rating = Math.random(5 - 1) + 1;
    rating = rating.toFixed(1);

    models.Attraction.findOrCreate({
      where: {
        name,
      },
    })
    // Missing where attribute in the options parameter
      .then((attraction) => {
        models.Attraction.update(
          {
            latitude,
            longitude,
            description,
            rating,
          },
          {
            where: {
              name,
            },
          },
        );
      });
  }
};
