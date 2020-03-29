const dns = require('dns').promises;
const options = {
    all:true,
}

dns.lookup('flimflam.doodoo.sdfadasdaf.com', options)
.then((result) => {
    console.log('dns result =', result);
  }).catch((err) => {
      console.log('dns result =', err);
});

dns.resolveMx('flimflam.doodoo.sdfadasdaf.com', options)
.then((result) => {
    console.log('mx result =', result);
}).catch((err) => {
    console.log('mx result =', err);
});