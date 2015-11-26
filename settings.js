var remoteApis = {
  '/remote-apis/highmaps/worlds/custom/world': {
    url: 'http://code.highcharts.com/mapdata/custom/world.geo.json'
  },
  '/remote-apis/worldbank/indicators': {
    url: 'http://api.worldbank.org/indicators?format=json&per_page=32727'
  },
  '/remote-apis/worldbank/indicators/:_id': {
    url: 'http://api.worldbank.org/countries/all/indicators/{_id}?format=json&per_page=32767&mrv=1&gapfill=y'
  },
  '/remote-apis/worldbank/countries': {
    url: 'http://api.worldbank.org/countries?format=json&per_page=32767'
  }
};

module.exports = {
  "remoteApis": remoteApis,
  "port": 8102
};

