# electron-recipes
Recipe management app built in [electron](https://github.com/electron/electron).

## Getting started

### Using the app

#### Available features

The app provides basic CRUD functionality, and currently allows you to:
- create new recipes (with a title, a description, the list of ingredients and the difficulty)
- set a recipe as favorite (or the reverse)
- filter recipes by ingredient name, difficulty and favorite status

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

In case you fancy it, you can populate the database with some dummy data:

```bash
$ npm run seed -- 20 # Generates 20 random recipes
```

## Notes

The app is currently using [leveldb](http://leveldb.org/) for storage because, in this specific case, it makes sense for the database to be embedded. Being that said, it would be weird to ship the app with a full-fledged database engine or other external dependencies.

I could have used something like [sqlite](https://sqlite.org/), but the functionality is simple enough that introducing any schema and underlying table structure would probably do more harm than good at this point.

One problem with all this, is that there are some [known](https://github.com/Level/levelup/issues/395) [issues](https://github.com/electron/electron/issues/5851) when running `level` with the most recent versions of `electron`. So, to avoid those issues, this package ships with the soon-to-be deprecated  [electron-prebuilt](https://github.com/electron-userland/electron-prebuilt#readme) locked to version `v1.1.3`.

## TODO

There are a lot of improvements to be made. But here are the most pressing ones:
- improve the functional test suite
- add more meaningful unit tests
- improve the database management layer (use [level-party](https://github.com/substack/level-party) to enable multi-process access)
- extract proper presentational and container components
- better leverage the usage of ids and classes in the components
- improve the design (maybe using some framework such as [bootstrap](https://github.com/twbs/bootstrap))
