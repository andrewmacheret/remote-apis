# remote-apis

[![Build Status](https://travis-ci.org/andrewmacheret/remote-apis.svg?branch=master)](https://travis-ci.org/andrewmacheret/remote-apis) [![Docker Stars](https://img.shields.io/docker/stars/andrewmacheret/remote-apis.svg)](https://hub.docker.com/r/andrewmacheret/remote-apis/) [![Docker Pulls](https://img.shields.io/docker/pulls/andrewmacheret/remote-apis.svg)](https://hub.docker.com/r/andrewmacheret/remote-apis/) [![License](https://img.shields.io/badge/license-MIT-lightgray.svg)](https://github.com/andrewmacheret/remote-apis/blob/master/LICENSE.md)

Node.js wrapper for remote APIs in order to circumvent cross-origin issues.

Intended for use with [andrewmacheret/map-game](https://github.com/andrewmacheret/map-game)

## Docker usage:

Prereqs:

* [Node.js](https://nodejs.org)

* [Docker](https://www.docker.com/products/docker)

Usage:

```bash
# install node prereqs
npm install

# optional: build it from source
docker build -t andrewmacheret/remote-apis .

# run it
docker run -d \
  --name remote-apis \
  -p 80:80 \
  andrewmacheret/remote-apis
```

## Manual usage:

Prereqs:

* [Node.js](https://nodejs.org/)

Usage:

```bash
# install node prereqs
npm install

# run it
node remote-apis.js
```

Modify `remoteApis` and `port` in [settings.js](settings.js) as needed.

## Test it:

* `node remote-apis.js`

* `curl 'http://localhost`

  * You should get back something like:

    ```json
    {
      "apis": [
          "/remote-apis/highmaps/worlds/custom/world",
          "/remote-apis/worldbank/indicators",
          "/remote-apis/worldbank/indicators/:_id",
          "/remote-apis/worldbank/countries"
      ]
    }
    ```
* `curl 'http://localhost/remote-apis/worldbank/countries`

  * You should get the same result as if you went to [http://api.worldbank.org/countries?format=json&per_page=32767](http://api.worldbank.org/countries?format=json&per_page=32767)

