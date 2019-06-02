import React, { /* Fragment */ } from 'react'
import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer'
import MainLayout from './Layouts/MainLayout'
import styles from './styles'

const DocumentLayouts = (type, documentTitle, data) => {
  return (
    <Document>
      <Page size='A4' style={styles.page} wrap>
        <View style={styles.section}>
          <Text style={styles.text}>
            {documentTitle}
          </Text>
          {MainLayout(type, data)}
        </View>
      </Page>
    </Document>
  )
}

export default DocumentLayouts
