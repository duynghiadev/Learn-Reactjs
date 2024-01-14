# TodoList-React.js

This project was created to learn how to make web-apps using Express.js framework with React.js components.


### Screenshots:
![pic1](https://cloud.githubusercontent.com/assets/26466644/25105952/49da7448-23c7-11e7-8941-8205d01335e8.png)
![pic2](https://cloud.githubusercontent.com/assets/26466644/25105835/b73a4262-23c6-11e7-9397-00c89443a98b.png)

## Instructions
#### To install all required packages write in your command line: 
```
npm install
```

#### To compile React components write:
```
webpack -w
```

#### To start application write:
```
npm start
```

#### And open in browser http://localhost:3000/

<br>

## React + Express little tutorial
1. Create folder for your project<br>

2. Inside this folder create Express project:
```
$ express --view=<view>
```
where you have to put your view engine on the place of ```<view>```.
For example you can write ```$ express --view=ejs``` to create a project with ```ejs``` view engine.<br>
- *PS: to be able to run this command, you need to have express generator installed globally on your computer. Do do this you have to execute in command line* ```$ npm install express-generator -g```. *For more information about express generator you can visit this page:* https://expressjs.com/en/starter/generator.html 
<br>

3. Install all node modules that are needed:
```
$ npm install
```
<br>

4. Install React:
```
$ npm install react --save
```
<br>

5. Install ReactDOM:
```
$ npm install react-dom --save
```
<br>

6. Install webpack:
```
$ npm install webpack --save-dev
```
- *PS: later you will need to have webpack installed globally on your computer. Do do this you have to execute in command line* ```$ npm install webpack -g```.
<br>

7. Install Babel Core:
```
$ npm install babel-core --save-dev
```
<br>

8. Install Babel Loader:
```
$ npm install babel-loader --save-dev
```
<br>

9. Install Babel Presets:
```
$ npm install babel-preset-react --save-dev
$ npm install babel-preset-es2015 --save-dev
```
<br>

10. Create **webpack.config.js** file inside project folder:
```javascript
var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: {
        app: './public/app/App.js'
    },
    output:{
        filename: 'public/build/bundle.js',
        sourceMapFilename: 'public/build/bundle.map'
    },
    devtool: '#source-map',
    module: {
       loaders: [
           {
               test: /\.jsx?$/,
               exclude: /(node_modules|bower_components)/,
               loader: 'babel-loader',
               query:{
                   presets: ['react','es2015']
               }
           }
       ]
    }
}
```
<br>

11. Create **app** folder with react components and configure paths:
- *PS: The simplest component that is rendering into* ```div``` *with* ```id="app"``` *will look like this:*
```javascript
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
	render() {
    return(
        <div>
          <h1>Hello world!</h1>
        </div>
    )
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
```
<br>

12. Import your components inside view:
- *PS: The simplest component that use previous component will look like this:*
```html
<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8">
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>

  <body>
  	<div id="app"></div>

    <script type="text/javascript" src="/build/bundle.js"></script> 
  </body>
</html>
```
<br>

13. Run webpack to compile your react components and wach their changes:
```
$ webpack -w
```
<br>

14. To run the app write in other command line tab:
```
$ npm start
```
<br>

15. Open in your browser on **http://localhost:3000/** and enjoy your app with react component and express back-end

#### Good luck! :)
