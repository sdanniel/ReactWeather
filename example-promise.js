function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject('a or b are not a number');
    } else {
      resolve(a + b);
    }
  });
}


addPromise('a', 6).then(function(res) {
  console.log('success',res);
}, function(err) {
  console.log('error', err);
});
