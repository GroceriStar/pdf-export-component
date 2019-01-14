
[![npm version](https://badge.fury.io/js/%40groceristar%2Fpdf-export.svg)](https://badge.fury.io/js/%40groceristar%2Fpdf-export)

``` yarn add @groceristar/pdf-export ```

- [ ] Move our stuff like `fetch` and other, that is not necessary in build to devDependencies.


- [ ] update our components in a way so we can actually be free from similar files with similar names.



example how i use list:


<!--
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

sandbox project https://github.com/GroceriStar/react-print-pdf

-->

 - for creating build run 'yarn clean && yarn build'
 - tests, lint, coverage is not working at this moment

---

- [ ] Create test coverage


<!---



<p align="center">
  <a href="https://travis-ci.org/eunikitin/modern-package-boilerplate">
    <img src="https://travis-ci.org/eunikitin/modern-package-boilerplate.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://coveralls.io/github/eunikitin/modern-package-boilerplate?branch=master">
    <img src="https://coveralls.io/repos/github/eunikitin/modern-package-boilerplate/badge.svg?branch=master" alt="Coverage Status">
  </a>
  <a href="https://david-dm.org/eunikitin/modern-package-boilerplate">
    <img src="https://david-dm.org/eunikitin/modern-package-boilerplate/status.svg" alt="dependencies Status">
  </a>
  <a href="https://david-dm.org/eunikitin/modern-package-boilerplate?type=dev">
    <img src="https://david-dm.org/eunikitin/modern-package-boilerplate/dev-status.svg" alt="devDependencies Status">
  </a>
  <a href="https://david-dm.org/eunikitin/modern-package-boilerplate?type=peer">
    <img src="https://david-dm.org/eunikitin/modern-package-boilerplate/peer-status.svg" alt="peerDependencies Status">
  </a>
</p>



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




#### Code Example

```

```



#### Tests

`npm test`


#### Contributors

@vadim9999, @atherdon


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
