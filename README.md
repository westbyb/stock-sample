# stock-sample

`npm run build` to build app to /build folder  
`npm start` to start server after building  
`npm test` to run unit tests  

Total Time: 4 hours. 3 hours of actual development, 1 hour of messing around with `fetch()` and config files.  

I tried to make the API calls using `fetch()` at first, for a fun exercise, but it turns out fetch doesn't support jsonp. I tried using other finance APIs to get around the CORS issues, but they were designed poorly and decided to just go ahead and use good 'ol `ajax()`, since I know that supports jsonp. Once I made that change, the rest fell into place.