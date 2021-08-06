

## Codeby - Challenge


### Available Scripts

In the project directory, you can run:

### ` npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.



### Table of contents
[Project structure](#project-structure)

[Installation](#installation)

[Configuration](#configuration)

[Technologies used](#technologies-used)

### Project structure

````

src/
|- components/                                # All components

|    |- assets/ ______________ img
|    |- Header/ 
|       |- index.jsx __________________________ # View Component
        |- styles.js __________________________ # Css modules styles
|    |- Products/ 
        |- index.jsx __________________________ # Product
        |- styles.js __________________________ # Css modules styles
|    |- ShoppingCart/ 
|       |- CartProducts.jsx __________________________ # Component view product cart
        |- index.jsx __________________________ # Receiving component CartProducts   
        |- styles.js __________________________ # Css modules styles
|    
|- context/      
    |- cart/
        |- CartContext.jsx ______________________________ # actions for redux
        |- CartReducer.jsx ______________________________ # Context Reducer
        |- CartState.jsx ______________________________ # Context State
    |- Types.js  ______________________________ # Global Variable Context

    |- styles/ 
       |- Global.jsx __________________________ # Global css component-styled
    
    |- utils/ 
       |- index.jsx __________________________ # utils project   
       
|- App.js _________________________ # All Componets
|- index.js _________________________ # Render
| reportWebVitals.js ________________ set of useful metrics
````


### Installation

1- Clone the project

`git clone git clone https://github.com/ferreiraguihh/codeBy-challenge`

2-`npm install` to install npm packages

3- start dev server using `npm start`.


#### Technologies used

* [Webpack 4](https://github.com/webpack/webpack) 
* [Babel 8](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
* [React](https://github.com/facebook/react)
* [Context](https://pt-br.reactjs.org/docs/context.html)
* [Styled-Components](https://styled-components.com/)
Create by Guilherme Ferreira dos Santos
