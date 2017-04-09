[![Circle CI](https://circleci.com/gh/Kiran-Rao/react-redux-example.svg?style=shield&circle-token=873caf43986abd16fc3a9a36e1bacff1b17a9c70)](https://circleci.com/gh/Kiran-Rao/react-redux-example)
# react-redux-starter

> Rangle.io official React + Redux starter

## Getting Started

Use our [starter script](https://www.npmjs.com/package/rangle-starter), with
`react-redux-starter` as the `techStack` argument.

## npm scripts

### Dev
```bash
$ npm run dev
```

This runs a development mode server with live reload etc.

Open `http://localhost:8080` in your browser.

### Production

```bash
npm run build
npm start
```

This runs a production-ready express server that serves up a bundled and
minified version of the client.

Open `http://localhost:8080` in your browser.

### Tests

#### Single Run
```bash
$ npm run test
```

#### Watch Files
```bash
$ npm run test:watch
```

#### Coverage
Code coverage is generated automatically after a `npm run test` run (but not
`test:watch`).

#### Connecting to remote APIs

Both the devmode and production servers provide a way to proxy requests to
remote HTTP APIs.  This can be useful for working around CORS issues when
developing your software.

Edit [this file](server/proxy-config.js) to mount such APIs at a given path.

## Improvements

This is an initial version of this setup and will be expanded in the future. Refer to the [issues section](https://github.com/rangle/rangle-starter/issues) to see what needs to be done, or create a [new one](https://github.com/rangle/rangle-starter/issues/new).

Issues for this particular starter project are tagged with the 'es6-react' label.

## If something doesn't work

We centralize issue management for all rangle starters in the [rangle-starter](https://github.com/rangle/rangle-starter) repository, to help us keep things consistent.

Refer to the [issues section](https://github.com/rangle/rangle-starter/issues) to see if this has already been logged. Otherwise create a [new issue](https://github.com/rangle/rangle-starter/issues/new).

Be sure to tag your new issue with the 'es6-react' label so we can see which starter you're filing it for.

## License

Copyright (c) 2015 rangle.io

[MIT License][MIT]

[MIT]: ./LICENSE "Mit License"
