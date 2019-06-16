import React from 'react'
import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer'

// @TODO I don't like the name MainLayout. should be more explanatory
import MainLayout from './Layouts/MainLayout'

import styles from './styles'

// @TODO I don't like name DocumentLayouts. Looks like this layout is main and it's like a wrapper for inner data
const DocumentLayouts = (type, name, data) => {
  return (
    <Document>
      <Page size='A4' style={styles.page} wrap>
        <View style={styles.section}>
          <Text style={styles.text}>
            {name}
          </Text>
          {MainLayout(type, data)}
        </View>
      </Page>
    </Document>
  )
}

export default DocumentLayouts
