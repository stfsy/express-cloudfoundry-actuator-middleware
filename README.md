# express-cloudfoundry-actuator-middleware

[![Build Status](https://travis-ci.org/stfsy/express-cloudfoundry-actuator-middleware.svg)](https://travis-ci.org/stfsy/express-cloudfoundry-actuator-middleware)
[![Dependency Status](https://img.shields.io/david/stfsy/express-cloudfoundry-actuator-middleware.svg)](https://github.com/stfsy/express-cloudfoundry-actuator-middleware/blob/master/package.json)
[![DevDependency Status](https://img.shields.io/david/dev/stfsy/express-cloudfoundry-actuator-middleware.svg)](https://github.com/stfsy/express-cloudfoundry-actuator-middleware/blob/master/package.json)
[![Npm downloads](https://img.shields.io/npm/dm/express-cloudfoundry-actuator-middleware.svg)](https://www.npmjs.com/package/express-cloudfoundry-actuator-middleware)
[![Npm Version](https://img.shields.io/npm/v/express-cloudfoundry-actuator-middleware.svg)](https://www.npmjs.com/package/express-cloudfoundry-actuator-middleware)
[![Git tag](https://img.shields.io/github/tag/stfsy/express-cloudfoundry-actuator-middleware.svg)](https://github.com/stfsy/express-cloudfoundry-actuator-middleware/releases)
[![Github issues](https://img.shields.io/github/issues/stfsy/express-cloudfoundry-actuator-middleware.svg)](https://github.com/stfsy/express-cloudfoundry-actuator-middleware/issues)
[![License](https://img.shields.io/npm/l/express-cloudfoundry-actuator-middleware.svg)](https://github.com/stfsy/express-cloudfoundry-actuator-middleware/blob/master/LICENSE)

ExpressJS actuator middleware for Cloud Foundry Applications

## Example

Use [Actuator CLI](https://github.com/stfsy/node-cloudfoundry-actuator-cli) to generate build time info file. Add actuator middleware before your application endpoints.

```js
'use strict'

const express = require('express')
const app = express()

const actuator = require('express-cloudfoundry-actuator-middleware')

// ...

app.use(actuator())

// ...
```

## Installation

```
npm install express-cloudfoundry-actuator-middleware --save
```

## License

This project is distributed under the MIT license.