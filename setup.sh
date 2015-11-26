#!/bin/bash

npm install express
npm install request
npm install compression
npm install apicache
patch -p1 < apicache.patch

