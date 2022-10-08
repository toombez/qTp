#!/usr/bin/env node
import { render } from 'ink'
import React from 'react'
import meow from 'meow'
import App from './App'

meow(`
    Usage
        CLI $ terminalGame

    Options

    Examples
`, {})

render(<App />)
