<p align="center"><img src="https://avatars2.githubusercontent.com/u/36658223?s=200&v=4" alt=""/></p>
<h3 align="center">Groceristar-fetch module<h3>
<p align="center">This is a module for using API like wrappers for getting food data for use in many projects. Just Like an database and fetch API in JS</p>

[![Build Status](https://travis-ci.org/GroceriStar/pdf-export-component.svg?branch=master)](https://travis-ci.org/GroceriStar/pdf-export-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


Table of Contents
=================

 * [Quick Start](#additional-information)
 * [What's included](#installation)
 * [Bugs and feature requests](#code-example)
 * [Documentation](#tests)
 * [Contributors](#contributors)


## Quick Start
Several quick start options are available:
* Clone the repo: `git clone https://github.com/GroceriStar/pdf-export.git`
* Install with npm: `npm install @groceristar/pdf-export`
* Install with yarn: `yarn add @groceristar/pdf-export`

## What's included
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
.
├── docs
│   └── readme.md           # Secondary information about project
└── src               
    ├── projects            # Tests for self-titled projects
    │   ├── ChickenKyiv
    │   ├── GraphQL
    │   ├── GroceriStar
    │   ├── GS-Loopback
    │   ├── MealCalendar
    │   ├── Search
    │   ├── Showcase
    │   └── UnitConvertion
    ├── import
    ├── index.js    
    ├── index.test.js     
    └── utils.js    
.gitignore
README.md
package.json
babel.config.js
jest.config.js
rollup.config.js
LICENSE
```

We provide compiled JS, as well as compiled and minified JS.



To Find out about all the functionality use https://groceristar.github.io/groceristar-fetch/.


#### Contributors

@vadim9999, @MinkoJ2, @chauhannishith, @atherdon, @GuiFSs, @kraftaa, @aanchirinah, @wahaj-47, @tihaami







[![npm version](https://badge.fury.io/js/%40groceristar%2Fpdf-export.svg)](https://badge.fury.io/js/%40groceristar%2Fpdf-export)

[![Build Status](https://travis-ci.org/GroceriStar/pdf-export-component.svg?branch=master)](https://travis-ci.org/GroceriStar/pdf-export-component)

``` initial commit ```


``` yarn add @groceristar/pdf-export ```

- [ ] Move our stuff like `fetch` and other, that is not necessary in build to devDependencies.


- [x] update our components in a way so we can actually be free from similar files with similar names.

- [x] i don't like this name - render lists.
it should be something simple and better for it.

- [ ] still not proud of this code + it's not tested with 2-3 different projects inside

example how i use list:



```
// this is an ingredient for list
import React, { Component, Fragment } from 'react';

import { RenderLists3 } from '@groceristar/pdf-export';
// import styles as well
...
return (

  <PDFViewer width={1200} height={1000}>
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.section}>
          <Text style={styles.text}>
            Page Header - Document title
          </Text>

          <RenderLists3 data={data} />

      </View>
      </Page>
    </Document>
  </PDFViewer>

);
```

- [ ] Reinstall fetch as dev dependency
- [ ] tests takes a lot of times


sandbox project https://github.com/GroceriStar/react-print-pdf

```






@babel/plugin-proposal-object-rest-spread

<!---


# Groceristar-fetch module

#### Synopsis
  This is a module for using API like wrappers for getting food data for use in many projects. Just Like an database and fetch API in JS

[![Build Status](https://travis-ci.org/GroceriStar/groceristar-fetch.svg?branch=master)](https://travis-ci.org/GroceriStar/groceristar-fetch)
[![npm version](https://badge.fury.io/js/%40groceristar%2Fgrocery-component.svg)](https://badge.fury.io/js/%40groceristar%2Fgrocery-component)




[Introduction Article]()

[Trello board with current tasks]()

[Documentation Website]()


#### Installation

`npm install @groceristar/grocery-component`
or
`yarn add @groceristar/grocery-component`


---
Tasks:
- [ ] [add tests]()
- [ ] [make build working nice]()
- [ ] ESLint resolver too https://medium.com/bootstart/why-you-should-use-babel-resolvers-210615fc41d
- [ ] ignore lib folder, so it will be created only when we publish it on npm. we don't need it locally. delete from source, then only ignore, so it wouldn't be at github repo...
---


Trello Board:

Sandbox Editor:

Created with help of this articles:
https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738
https://medium.com/@adrianli/the-idiot-s-guide-to-publishing-a-react-component-to-npm-2b66b1ac03e0


-->
