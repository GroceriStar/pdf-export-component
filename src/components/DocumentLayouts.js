import React from 'react'

import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer'

// @TODO i don't like this approach, but it looks simple for now
import ColumnList from '~/DocumentDesigns/ColumnList'
import RowList from '~/DocumentDesigns/RowList'
import RowList1 from '~/DocumentDesigns/RowList1'
import StandaloneRecipe from '~/DocumentDesigns/StandaloneRecipe'

import styles from './styles'

// @TODO move away switch into a separated function

const DocumentLayouts = (type, documentTitle, data) => {
  let layout

  switch (type) {
    case 'PDF1':
      layout = <ColumnList data={data} />
      break

    case 'PDF2':
      layout = <RowList data={data} />
      break

    case 'PDF3':
      layout = <RowList1 data={data} />
      break

    case 'PDF4':
      layout = <StandaloneRecipe data={data} />
      break

    default:
      layout = <ColumnList data={data} />
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
