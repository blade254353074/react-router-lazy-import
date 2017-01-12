# React-router component lazyload with `import()`

This is a react-router component lazyload example with TC39 Stage-3 syntax `import()`
Please checkout the file `./src/Router.js`

## How to start

```bash
$ yarn
$ npm start
```

Checkout [http://0.0.0.0:8080/](http://0.0.0.0:8080/)

## Build

```bash
$ npm run Build
# Then checkout ./build
```

If you are using docker, to see the build results, you can run:

```bash
$ docker-compose up
```

Then checkout [http://localhost/](http://localhost/)

## Lazyload

```jsx
function lazyLoad (moduleName) {
  return function (location, cb) {
    import(`./components/${moduleName}`)
      .then(module => cb(null, module.default))
      .catch(err => console.error(err))
  }
}

export default function Root () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='/home' getComponent={lazyLoad('Home')} />
        <Route path='/posts' getComponent={lazyLoad('Posts')}>
          <Route path=':id' getComponent={lazyLoad('Article')} />
        </Route>
        <Route path='/about' getComponent={lazyLoad('About')} />
      </Route>
    </Router>
  )
}
```

