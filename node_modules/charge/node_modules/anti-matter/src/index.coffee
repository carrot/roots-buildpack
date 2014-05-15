require('colors')

module.exports = (opts) ->
  commands = opts.commands
  title    = opts.title
  log      = opts.options.log   || false
  width    = opts.options.width || 75
  color    = opts.options.color || 'red'

  if not commands then throw '"commands" missing'

  res = ""

  res += generate_title(title, color) if title
  res += generate_command(cmd, color, width) for cmd in commands

  if log then console.log(res)

  return res

generate_title = (text, color) ->
  res = "\n#{text}\n"[color].bold
  res += "-".bold for i in [0...text.length]
  res += "\n"
  res

generate_command = (cmd, color, width) ->

  if cmd.required and typeof cmd.required == 'string'
    cmd.required = [cmd.required]

  if cmd.optional and typeof cmd.optional == 'string'
    cmd.optional = [cmd.optional]

  res = "\n* "[color]
  res += "#{cmd.name.bold} "
  res += "#{arg.underline} ".grey for arg in cmd.required if cmd.required
  res += "[#{arg}] ".grey for arg in cmd.optional if cmd.optional
  res += "\n"
  res += "#{wordwrap(cmd.description, width, '\n')}"
  res += "\n"

wordwrap = (str, width, brk, cut) ->
  brk = brk || '\n'
  cut = cut || false
  if not str then return str
  regex = '.{1,' +width+ '}(\\s|$)' + (if cut then '|.{' +width+ '}|.+$' else '|\\S+?(\\s|$)')
  return str.match( RegExp(regex, 'g') ).join(brk)
