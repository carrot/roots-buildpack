should = require 'should'
antimatter = require '..'

describe 'basic', ->

  it 'should work', ->
    antimatter
      title: 'foobar'
      options: { log: true, color: 'yellow' }
      commands: [
        {
        name: 'test'
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, accusamus, esse, sunt eaque maiores quasi.'
        }, {
        name: 'test2'
        required: 'foo'
        optional: ['--bar', '--baz']
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, accusamus, esse, sunt eaque maiores quasi.'
        }
      ]

