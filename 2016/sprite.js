'use strict';

const fs = require('fs')
const minimist =require('minimist')
const cheerio = require('cheerio')

function extractPaths($) {
  return $('path').removeAttr('fill').toString()
}

function extractDimensions($) {
  return { width: $('svg').attr('width'), height: $('svg').attr('height') }
}

function templateColors(params) {
  return params.colors.map(
    (color, i) => `
      <g fill="#${color}">
        <use xlink:href="#source" transform="translate(0 ${params.dimensions.height * i})"></use>
      </g>
    `
  ).join('')
}

function templateSvg(params) {
  return `
    <svg
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      width="${params.dimensions.width}"
      height="${params.dimensions.height * params.colors.length}"
      viewBox="0 0 ${params.dimensions.width} ${params.dimensions.height * params.colors.length}"
      preserveAspectRatio="none"
      x="0"
      y="0">
      <defs><g id="source">${params.paths}</g></defs>
      ${templateColors(params)}
    </svg>
  `
}

function formatHelp() {
  return [
    '\n',
    '\tUsage: node sprite.js --icon={filename} --colors=list,of,hex,codes\n',
    '\tExample: node sprite.js --icon=hamburger.svg --colors=ffffff,000000,ff0000\n',
    '\n'
  ].join('')
}

let args = minimist(process.argv.slice(2))
let output = ''

if (args.help) {
  output = formatHelp()
} else {
  let svgSource = fs.readFileSync(`${process.cwd()}/${args.icon}`)
  let $ = cheerio.load(svgSource, { xmlMode: true })

  output = templateSvg({
    dimensions: extractDimensions($),
    colors: args.colors.split(','),
    paths: extractPaths($)
  })
}

process.stdout.write(output)
process.exit()
