Infestor
---------
[![npm](https://badge.fury.io/js/infestor.png)](http://badge.fury.io/js/infestor)
[![Build Status](https://travis-ci.org/samccone/infestor.png)](https://travis-ci.org/samccone/infestor)


Inject content into your server responses


### Why?
There are times when all you want to do is inject a JS file or custom markup into the req res cycle without forcing the content generator to include custom markup on their side.

This is where infestor comes in. Just specify the regex insertion point and content. Then you are good to go.


### Installing
`npm install infestor`

### How to

```coffeescript
  app.use require('infestor')(
    content: "<h2> injected content! </h2>"
    injectAt: '/<\/html>/'
  ).use(...)
```

Make sure that you place the infestor middleware before you serve your content. Or else infestor will not work.
