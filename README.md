# Starter App

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## The idea behind the example

This example applies this gist https://gist.github.com/jamsesso/67fd937b74989dc52e33 to Nextjs and provides:

* Reverse proxy in development mode by add `http-proxy-middleware` to custom server
* NOT a recommended approach to production scale (hence explicit dev flag) as we should scope proxy as outside UI applications and have separate web server taking care of that.

Sorry for the extra packages. I belong to the minority camp of writing ES6 code on Windows developers. Essentially you only need `http-proxy-middleware` on top of bare-bone Nextjs setup to run this example.
