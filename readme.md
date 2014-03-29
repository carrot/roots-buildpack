# Roots Buildpack

This is a [buildpack](https://devcenter.heroku.com/articles/buildpacks) for deploying static sites to Heroku. It's powered by [Roots](http://roots.cx/), a static site compiler that takes advantage of modern pre-processing technologies. You don't have to use preprocessors though: this buildpack works with with regular old HTML, CSS, and JavaScript files too.

## Usage

```sh
mkdir my-roots-app
cd my-roots-app
echo "hello world" > index.html
git init
git add .
git commit -am "hello world"
heroku create my-roots-app
heroku config:set BUILDPACK_URL=https://github.com/carrot/roots-buildpack.git
git push heroku master
heroku open
```

## License

MIT
