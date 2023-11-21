fetch('http://localhost:3000', {
  method: 'POST',
  body: JSON.stringify({
    title: 'testtt',
    author: 'typicode',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
