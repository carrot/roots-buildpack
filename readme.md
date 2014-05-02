# Roots Buildpack

This is a [buildpack](https://devcenter.heroku.com/articles/buildpacks) for deploying static sites to Heroku. It's powered by [Roots](http://roots.cx/), a static site compiler that takes advantage of modern pre-processing technologies.

Example usage:
- http://roots-buildpack-sample.herokuapp.com/
- https://github.com/carrot/roots-buildpack-sample/

## Why should you care?
This buildpack represents one of the easiest and most powerful ways to host your static site. It allows the advantages of:

- Building with the full power of Roots
- The power of Heroku's git push interface
- The routing control of Superstatic

Go forth and precompile all the things...

## Usage

Make sure to include roots as a dependency in your `package.json`.

```sh
roots new my-roots-app
cd my-roots-app
git init
git add .
git commit -am "initial commit"
heroku create my-roots-app
heroku config:set BUILDPACK_URL=https://github.com/carrot/roots-buildpack.git
git push heroku master
heroku open
```

### Configuration
This buildpack serves your site using [Divshot.io's](http://divshot.io/) excellent [Superstatic](https://github.com/divshot/superstatic). To take advantage of it's full power, you can add a `superstatic.json` file at the root of your project which can do some really nice routing tricks and more. Below is an example of the power of Superstatic.

```json
# superstatic.json
{
  "clean_urls": true,
  "routes": {
    "app/**":"application.html",
    "projects/*/edit":"projects.html"
  },
  "cache_control": {
    "nocache/**": false,
    "**/*.html": 600,
    "private/**": "private, max-age=1200"
  }
}
```

For more information on how to configure the static site server, refer to Superstatic's [documentation](https://github.com/divshot/superstatic#configuration).

## Issues
- For now you must set your `output` directory to `public` in your `app.coffee`  [Roots configuration](http://roots.readthedocs.org/en/latest/configuration.html#options).

> **Note:** If you do not set your `output` directory, or don't have an `app.coffee` file, then it will default to `public`.

## Acknowledgements
- The majority of the buildpack logic is based off of Heroku's own [zeke/harp-buildpack](https://github.com/zeke/harp-buildpack), so thank you Zeke.
- The static server of choice is [divshot/superstatic](https://github.com/divshot/superstatic) made by the folks at [Divshot.io](http://divshot.io). Despite being in the static serving business, they chose to make this project open-source and that is super commendable.

## License

MIT
