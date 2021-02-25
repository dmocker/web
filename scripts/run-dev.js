const dotenv = require('dotenv')
const path = require('path')
const cli = require('next/dist/cli/next-dev')
const result = dotenv.config()

cli.nextDev(['-p', result.parsed.WEB_PORT])
