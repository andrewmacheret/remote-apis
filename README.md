# remote-apis
Node.js wrapper for remote APIs in order to circumvent cross-origin issues.

Intended for use with [andrewmacheret/map-game](https://github.com/andrewmacheret/map-game)

Prereqs:
* [Node.js](https://nodejs.org/) on a linux server
* A web server (like [Apache](https://httpd.apache.org/)).

Installation steps:
* `git clone <clone url>`
* `cd remote-apis/`
* `./setup.sh`
* Modify `remoteApis` and `port` in `settings.js` as needed

Test it:
* `node remote-apis.js`
* `curl 'http://localhost:8102`
 * You should get back something like:
  ```json
  {
    "apis": [
        "http://localhost:8102/remote-apis/highmaps/worlds/custom/world",
        "http://localhost:8102/remote-apis/worldbank/indicators",
        "http://localhost:8102/remote-apis/worldbank/indicators/:_id",
        "http://localhost:8102/remote-apis/worldbank/countries"
    ]
  }
  ```
  
