import React, { Fragment } from 'react'

import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer'

import MainLayout from './Layouts/MainLayout'

// import BulletListStyles from './Layouts/LayoutStyles/BulletList'
// import RowViewStyles from './Layouts/LayoutStyles/RowView'
// import ColumnViewStyles from './Layouts/LayoutStyles/ColumnView'

// @TODO move away switch into a separated function
//
// const PDF1Type = (BulletListStyles, data) => {
//   return (
//     <Fragment>
//       <MainLayout style={BulletListStyles} data={data} />
//     </Fragment>
//   )
// }
//
// const PDF2Type = (RowViewStyles, data) => {
//   return (
//     <MainLayout style={RowViewStyles} data={data} />
//   )
// }

const PDFType = data => {
  return (
    <MainLayout data={data} />
  )
}

const SwitchTypes = (type, data) => {
  let layout

  switch (type) {
    case 'PDF1':
      layout = PDFType(data)
      break

    case 'PDF2':
      layout = PDFType(data)
      break

    case 'PDF3':
      layout = PDFType(data)
      break

    default:
      layout = PDFType(data)
      break
  }

  return layout;
}

const DocumentLayouts = (type, documentTitle, data) => {

  return (
    <Document>
      <Page size='A4' style={styles.page} wrap>
        <View style={styles.section}>
          <Text style={styles.text}>
            {documentTitle}
          </Text>
          {SwitchTypes(type, data)}
        </View>
      </Page>
    </Document>
  )
}

export default DocumentLayouts
