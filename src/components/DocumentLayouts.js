import React from 'react'

import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer'

// @TODO i don't like this approach, but it looks simple for now

import MainLayout from './LayoutTypes/MainLayout'

// import styles from './styles'
import BulletListStyles from './LayoutStyles/BulletList'
import RowViewStyles from './LayoutStyles/RowViewStyles'
import ColumnViewStyles from './LayoutStyles/ColumnView'

// @TODO move away switch into a separated function

const DocumentLayouts = (type, documentTitle, data) => {
  let layout

  switch (type) {
    case 'PDF1':
      layout = <MainLayout styles={BulletListStyles} data={data} />
      break

    case 'PDF2':
      layout = <MainLayout styles={RowViewStyles} data={data} />
      break

    case 'PDF3':
      layout = <MainLayout styles={ColumnViewStyles} data={data} />
      break

    case 'PDF3':
      layout = <MainLayout styles={ColumnViewStyles} data={data} />
      break

    default:
      layout = <MainLayout styles={BulletListStyles} data={data} />
      break
  }

  return (
    <Document>
      <Page size='A4' style={styles.page} wrap>
        <View style={styles.section}>
          <Text style={styles.text}>
            {documentTitle}
          </Text>
          {layout}
        </View>
      </Page>
    </Document>
  )
}

export default DocumentLayouts
