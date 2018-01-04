# 6 pro tips from react developers

> stateless components: This means components that don’t have any this.state = { ... } calls in them. They only deal with incoming “props” and sub-components
> Anather is stateful components

## 1. use functional components

* less code
* easier to understand
* stateless
* simpler to test
* no 'this' binding
* easier to extract smaller components

## 2. Keep your components small

* Read
* Test
* Maintain
* Reuse

## 3. Understand how to handle 'this'

With ES6 classes, React does not autobind the functions inside that component.

```js
constructor(props) {
  super(props);
  this.bindFn = this.bindFn.bind(this)
}
```

## 4. Use a function in 'setState', not an object

## 5. Utilize prop-types

It can help prevent bugs by ensuring you are using the right data types for your props.

## 6. Use React developer tools

> Google react plugin

## 7. key

> Not all lists need to have keys. A list needs keys if either of the following are true:

* The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must "remember" whether it was checked off. The items shouldn't get amnesia when they render.

* A list's order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
