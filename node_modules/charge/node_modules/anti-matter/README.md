Antimatter
==========

Flexible command line documentation generation

### Why should you care?

You are writing a command line tool in node, and it needs help and usage commands. At the moment, the only simple option is to use the built-in doc generation abilities of a popular arg parser like [optimist](https://github.com/substack/node-optimist) or [commander](https://github.com/visionmedia/commander), but if you don't exclusively use flags for your command line tool, or you have more complex and/or nested command sets, this can end up being messy or impossible.

Antimatter attempts to solve this problem as a tool specifically for documenting command line interfaces in as simple and east-to-read a manner as possible, regardless of how the interface works or how complicated it is.

### Installation

`npm install antimatter`

### Usage

Antimatter makes no assumptions about how you have set up your command line interface, it just provides functions that make generating the documentation easier. Let's take a look at a high level example before we dive into it.

```js
var antimatter = require('antimatter');

antimatter({
  title: 'roots cli',
  options: { log: true },
  commands: [{
    name: 'watch',
    required: 'folder',
    optional: ['--no-open', '--no-livereload']
    description: 'watches your project for changes and reloads when detected'
  }, {
    name: 'compile',
    optional: 'path',
    description: 'compiles your project once to the provided <path> or the current directory'
  }]
});
```

At the moment, antimatter only has one root function - it takes an optional title/header for the doc block, an optional object of options, and either an object or array of objects that represent documented commands. By default it will output a colored and formatted string, ready to print to the command line -- if you pass `{ log: true }` into the options as above, it will `console.log` it for you. Here's a screenshot of what the above would look like in your terminal.

![antimatter docs](https://i.cloudup.com/Md0HeNOkQK.thumb.png)

#### API Docs

The antimatter function takes an object with three potential properties, title (optional), options (optional), and commands.

##### Title

String, serves as the header on the set of documented commands. Optional.

##### Options

- **log** _(boolean)_: `console.log` the output
- **width** _(integer)_: constrain all text to this number of columns
- **color** _(string)_: main color for the docs. default is red, available values [here](https://github.com/marak/colors.js/#colors-and-styles)

##### Commands

Either an object or array of objects that detail the command or commands you are documenting. Each object can have a few keys:

- **name** _(string)_: name of the command you are documenting
- **required** _(string/array)_: optional, required params passed to the command
- **optional** _(string/array)_: optional, optional commands passed to the command
- **description** _(string)_: description of the command. wrap any param in angle brackets to highlight it.

### License & Contributing

- Details on the license [can be found here](LICENSE.md)
- Details on running tests and contributing [can be found here](contributing.md)
