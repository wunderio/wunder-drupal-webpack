# Drupal + Webpack starter theme

A simple Drupal starter theme with Webpack setup using `npm` and BrowserSync.

### Getting started

- Navigate to the root directory and install node dependencies:
```
npm install
```

- Start watching for files and start up BrowserSync:

```
npm run develop
```


### Adjust settings to your project

In `package.json`:

  - Set `proxy` to the local address of your site
  
**When your theme path changes**

  - Set `path.appThemeRoot` in `package.json`
  - Adjust the root Webpack configuration file `webpack.config.js`
  
**Having different settings per theme/module**

You can have different configuration for each theme/module you are working 
on. E.g., different set of node modules installed or different source file 
paths per theme. 

To enable this add a separate `webpack.config.js` and optionally 
`package.json` to your sub-project directory and list them in the root
`webpack.config.js` file.
