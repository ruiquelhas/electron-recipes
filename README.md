# electron-recipes
List of recipes as an electron app

## Getting started

### Installing the dependencies

```bash
$ npm i
```

### Running the tests

```bash
$ npm t
```

### Running the app

```bash
$ npm start
```

## Notes

Until there is a way to create new recipes, a nice way to see things working is by seeding the database with some random stuff. To do that, you can run the following script:

```bash
$ npm run seed
```

This is currently using [leveldb](http://leveldb.org/) for storage because, in this specific case, it makes sense for the database to be embedded with the application itself. Being that said, it would be weird to ship the app with a full-fledged database engine or other external dependencies.

I could have used something like [sqlite](https://sqlite.org/), but the functionality is simple enough that introducing any schema and underlying table structure would probably do more harm than good at this point.

One problem with all this, is that there are some [known](https://github.com/Level/levelup/issues/395) [issues](https://github.com/electron/electron/issues/5851) when running `level` with the most recent versions of `electron`. So, to avoid those issues, this package ships with the soon-to-be deprecated  [electron-prebuilt](https://github.com/electron-userland/electron-prebuilt#readme) locked to version `v1.1.3`.
