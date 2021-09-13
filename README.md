# ReduxStore

## Description

Motivation for this project was to learn how to refactor a code project that was NOT using the redux library and make it a redux'd code.

I built this project to test how a site can stay the same but become better at the same instance; with redux allowing the webpage load large/multiple groups of things at once by having a way of not updating initial states (so it doesn't overwrite anything) and instead modifies a copy!
The problem refactoring something with redux library solves is that it makes it more maintainable by giving us a central place to put global app state.

I learned that Redux allows us to create a container which holds global states and that is called a "store" which allows us to have specialized features (which are recommended if you know your code will have multiple users in and out / need to load a lot of things, etc) BUT we will need to use a plain action to "dispatch" if we need to make an update to the store. Also learning that Redux itself is a STANDALONE library and can be used anywhere; meaning that it could be used with any UI layer, super cool stuff! Love the evolution of technology because it's primarily meant to help things be "easier" / "clearer" / make more sense!

## Table of Contents

- [Installation](#installation)
- [Credits](#credits)
- [License](#license)

## Installation

- Git clone repo (https://github.com/LYBLRey/ReduxStore)
- npm i
- within ReduxStore/server/config , run "node seeds.js"
- npm start

## Credits

- https://redux.js.org/introduction/installation
- https://redux.js.org/tutorials/fundamentals/part-1-overview
- https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
- https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

## License

MIT License

Copyright (c) 2021 Sareybodd Chhorn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features

Features usages of REDUX STANDALONE LIBRARY
