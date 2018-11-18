# Loader-HOC
A loading status generator for React apps

## Installation
Using npm:
```shell
$ npm i --save loader-hoc
```
If you use ES modules:
```js
import LoaderWrapper from 'loader-hoc'
```

## Details
Loader-HOC is a higher-order component that wraps your asynchronous functions for fetching data. 

All async functions available as props in your React component (through props directly or in a connected component as mapDispatchToProps function) that you wrap in LoaderWrapper will be individually wrapped. When these functions are called, their loading status will apear in the wrapped component's props. The new props will have the function name concatenated with 'Status' (e.g. fetchData() will become 'fetchDataStatus') with an object set as its value. This object contains two properties, isLoading and error, that dynamically update. 

This npm package makes the loading status and/or error message of your calls for data immediately accessible in your front end components. 

[View package source](https://github.com/e-l-i-s-e/loader-hoc)
