var remoteApis = {
  '/highmaps/worlds/custom/world': {
    url: 'http://code.highcharts.com/mapdata/custom/world.geo.json'
  },
  '/worldbank/indicators': {
    url: 'http://api.worldbank.org/indicators?format=json&per_page=32727'
  },
  '/worldbank/indicators/:_id': {
    url: 'http://api.worldbank.org/countries/all/indicators/{_id}?format=json&per_page=32767&mrv=1&gapfill=y'
  },
  '/worldbank/countries': {
    url: 'http://api.worldbank.org/countries?format=json&per_page=32767'
  }
};

module.exports = {
  "remoteApis": remoteApis,
  "port": 80
};
