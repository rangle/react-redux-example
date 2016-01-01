# react-redux-starter

> Rangle.io official React + Redux starter

## Getting Started
```bash
$ git clone https://github.com/rangle/react-redux-starter
$ npm install
```

## npm scripts

### Dev
```bash
$ npm run dev
```

Open `http://localhost:3000` in your browser.

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
```bash
$ npm run cover
```

### Production
```bash
$ npm run start
```


## Deploy to Clusternator

#### Setup
```
#
# SOMEHOW OBTAIN THIS REPO FIRST, WITHOUT GIT HISTORY.
#

$ npm install -g clusternator

$ clusternator init
? Project ID react-redux-starter
? Where will your appDefs/deployment files live? .private/deployments
? Where will your private files live? .private
? Do you have a passphrase, or would you like a passphrase (If unsure say no) No
info: Clusternator Initialized With Config: /Users/rafy/Documents/rangle/react-redux-starter/clusternator.json Network Resources Checked
STORE THIS TOKEN ON GITHUB mwEbPKawNsQvCgOwNYNs8WvqjEe-pId3AvdgLmcvZ7rDbZCI1A_ix7gI1E0e4vk6QJY
SHARED KEY: abc123
```

#### Creating Hooks

- Go to your project repo's github settings and add a webhook pointing to
  `http://the-clusternator-raf.rangleapp.io/github/pr`.
- Add the token given to you in the `clusternator init` step as your
  **secret**. This is how we validate incoming github webhooks.

#### Configuring CI

Add the following environment variables to your cirleCI setup.

- CLUSTERNATOR_HOST (should be same as webhook endpoint)
- CLUSTERNATOR_AUTH
- CLUSTERNATOR_SHARED_KEY
- DOCKER_EMAIL
- DOCKER_USER
- DOCKER_PASSWORD


## License

Copyright (c) 2015 rangle.io

[MIT License][MIT]

[MIT]: ./LICENSE "Mit License"
