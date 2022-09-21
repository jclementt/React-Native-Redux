const ourHello = React.createElement('h1', null, 'Hello');

const ourHelloWithClass = React.createElement(
  'h1', 
  { className: 'my-title' }, 
  'Hello'
);

const ourList = React.createElement(
  'ul',
   null,
  [
    React.createElement('li', { className: 'item-01' }, 'Item 01'),
    React.createElement('li', { className: 'item-02' }, 'Item 02'),
    React.createElement('li', { className: 'item-03' }, 'Item 03'),
  ]
);

const myWrapper = React.createElement(
'div',
{ className: 'my-wrapper' },
[ourHelloWithClass, ourList]
);

const container = document.getElementById('app');
ReactDOM.render(myWrapper, container);
