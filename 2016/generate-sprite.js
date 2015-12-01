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
      height="${params.dimensions.height}"
      viewBox="0 0 ${params.dimensions.width} ${params.dimensions.height * params.colors.length}">
      <g id="source">${params.paths}</g>
      ${templateColors(params)}
    </svg>
  `
}

const args = minimist(process.argv.slice(2))

if (args.help) {
  process.stdout.write(
    [
      '\nUsage: node generate-sprite.js --icon={icon} --colors=list,of,hex,codes\n',
      '\nE.G.: node generate-sprite.js --icon=hamburger --colors=ffffff,000000,ff0000\n\n'
    ].join('')
  )

  process.exit()
}

let svgSource = fs.readFileSync(`${process.cwd()}/svg/${args.icon}.svg`)
let $ = cheerio.load(svgSource, { xmlMode: true })

process.stdout.write(
  templateSvg({
    dimensions: extractDimensions($),
    colors: args.colors.split(','),
    paths: extractPaths($)
  })
)

process.exit()
