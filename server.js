#!/usr/bin/env node
var prerender = require('./lib');


var server = prerender({
   chromeLocation: './lib/browsers/',
   chromeFlags: ['--no-sandbox','--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars','--disable-setuid-sandbox' ]
});


server.use(prerender.sendPrerenderHeader());
server.use(prerender.browserForceRestart());
// server.use(prerender.blockResources());
server.use(prerender.addMetaTags());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());


server.start();
