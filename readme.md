# Roots Buildpack

This is a [buildpack](https://devcenter.heroku.com/articles/buildpacks) for deploying static sites to Heroku. It's powered by [Roots](http://roots.cx/), a static site compiler that takes advantage of modern pre-processing technologies.

## Usage

```sh
mkdir my-roots-app
cd my-roots-app
echo "h1 hello world" > index.jade
git init
git add .
git commit -am "hello world"
heroku create my-roots-app
heroku config:set BUILDPACK_URL=https://github.com/carrot/roots-buildpack.git
git push heroku master
heroku open
```

## Issues
- For now you must set your `output` directory to `public` in your `app.coffee`  [Roots configuration](http://roots.readthedocs.org/en/latest/configuration.html#options). If you do not set your `output` directory, or don't have an `app.coffee` file, then it will default to `public`.

## Acknowledgements
- The majority of the buildpack logic is based off of Heroku's own [zeke/harp-buildpack](https://github.com/zeke/harp-buildpack), so thank you Zeke.
- The static server of choice is [divshot/superstatic](https://github.com/divshot/superstatic) made by the folks at [Divshot.io](http://divshot.io). Despite being in the static serving business, they chose to make this project open-source and that is super commendable.

## License

MIT
