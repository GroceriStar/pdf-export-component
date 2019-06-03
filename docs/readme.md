
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


# react-print-pdf
Grocery list page build with React. Ability to see grocery list information, print or export to PDF

Components from: https://github.com/GroceriStar/pdf-export-component

install
- [x] @groceristar/pdf-export


- [x] When things will be tested and styles and stuff working well - everytrhing should be moved into npm component. right now it's have to understand that we have an up-to-date version at npm.

- [ ] Recipe should have white background. And content/description please split into few sentences by "." so it'll look better. Also can be added some spacing. Nothing fancy - just to make it looking not so ugly.

- [ ] Check, didn't our bug was gone with updated version of pdf-render?

- [x] publish a new version with DocLayouts inside and replace them here. should work or not? Where is the latest version?

[![Build Status](https://travis-ci.org/GroceriStar/react-print-pdf.svg?branch=master)](https://travis-ci.org/GroceriStar/react-print-pdf)



-->
