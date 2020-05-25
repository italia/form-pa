# Form PA

![Screen](public/images/screen.png "Screen")

## Generate a valid JSON Schema
Using [this](https://jsonschema.net) service or any others found on internet create a simple JSON schema results a quite easy operation to do.

## Run

### Local Dev
Install all dependencies and start
```bash
$ npm install
$ npm start
```

### Local Prod
Install all dependencies and build
```bash
$ npm install
$ npm build
```
Then `./dist` will be ready to be served.


### Docker
Run with a preset json schema, stored in `src/schema.json`
```bash
$ docker build . -t form-pa
$ docker run form-pa
```

Or simply run docker replacing that schema with one supplied at runtime as:
```bash
$ docker build -f Dockerfile.dev . form-pa:dev
$ docker run -v ${PWD}/schema.json.example:/app/src/schema.json -it -rm -p 3000:3000 form-pa
```