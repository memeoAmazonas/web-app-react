# Tuten WebApp by Jose Ortiz


## Project Setup

To install all Project's dependencies, run the following command:

```bash
$ npm install
```

## Running App

You need to set permissions to the scripts files because we will use them to build and run the app.

```bash
$ chmod +x ./scripts/build.sh
$ chmod +x ./scripts/start.sh
$ chmod +x ./scripts/dev.sh
```

**Note:** You only need to do this the first time.

To build and start the app, run the following commands:

```bash
$ npm run build
$ npm run start
```

### Dev Mode
```bash
$ npm run dev
```

## Production Environment

You need to set permissions to the script file for build process.

```bash
$ chmod +x ./scripts/deploy.sh
```

To build the app for production purposes, run the following command:

```bash
$ npm run deploy
```



