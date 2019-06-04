import React, { /* Fragment */ } from 'react'
import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer'

import MainLayout from './Layouts/MainLayout'

import styles from './styles'


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
