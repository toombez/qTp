#!/usr/bin/env node
import { render } from "ink"
import meow from "meow"
import React from "react"
import App from "./App.js"

meow(`
	Usage
	  $ qtp

	Options

	Examples
	  $ qtp
`,
  {
    flags: {},
    importMeta: import.meta,
  }
)

const app = render(
  <App/>
)

await app.waitUntilExit()
