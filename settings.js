var remoteApis = {
  '/highmaps/worlds/custom/world': {
    url: 'http://code.highcharts.com/mapdata/custom/world.geo.json',
    cache: '5 minutes'
  },
  '/worldbank/indicators': {
    url: 'http://api.worldbank.org/indicators?format=json&per_page=32727',
    cache: '5 minutes'
  },
  '/worldbank/indicators/:_id': {
    url: 'http://api.worldbank.org/countries/all/indicators/{_id}?format=json&per_page=32767&mrv=1&gapfill=y',
    cache: '5 minutes'
  },
  '/worldbank/countries': {
    url: 'http://api.worldbank.org/countries?format=json&per_page=32767',
    cache: '5 minutes'
  },
  '/reddit/:_id/random.json': {
    url: 'https://reddit.com/r/{_id}/random.json',
    cache: '1 second'
  }
};

module.exports = {
  "remoteApis": remoteApis,
  "port": 80
};
