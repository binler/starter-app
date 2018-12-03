import React from 'react'
import { Link } from '../routes'
import Head from 'next/head'

export default ({ children }) => (
  <div>
    <Head>
      <title>Starter App</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link route='/'><a>Home</a></Link >
        <Link route='/about'><a>About</a></Link >
        <Link route='/contact'><a>Contact</a></Link>
      </nav>
    </header>

      {children}

      <footer>
        {'I`m here to stay'}
      </footer>
  </div>
)