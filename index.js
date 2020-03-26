const dns = require('dns').promises;
const options = {
    all:true,
}

dns.lookup('aol.com', options)
.then((result) => {
    console.log(result);
  }).catch((err) => {
      console.log(err);
  });

dns.resolveMx('aol.com', options)
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});