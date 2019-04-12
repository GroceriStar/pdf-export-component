import React, { Fragment } from 'react'

import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer'

import MainLayout from './LayoutTypes/MainLayout'

// import styles from './styles'
import BulletListStyles from './LayoutStyles/BulletList'
import RowViewStyles from './LayoutStyles/RowViewStyles'
import ColumnViewStyles from './LayoutStyles/ColumnView'

// @TODO move away switch into a separated function

const PDF1Type = (BulletListStyles, data) => {
  return (
    <Fragment>
      <MainLayout styles={BulletListStyles} data={data} />
    </Fragment>
  )
}

const PDF2Type = (RowViewStyles, data) => {
  return (
    <MainLayout styles={RowViewStyles} data={data} />
  )
}

const PDF3Type = (ColumnViewStyles, data) => {
  return (
    <MainLayout styles={ColumnViewStyles} data={data} />
  )
}

const PDF4Type = () => {
  return (
    <MainLayout styles={BulletListStyles} data={data} />
  )
}


//@TODO where is our 4th case? related to displaying recipes

const SwitchTypes = (type, data) => {
  let layout

  switch (type) {
    case 'PDF1':
      layout = PDF1Type(BulletListStyles, data)
      break

    case 'PDF2':
      layout = PDF2Type(RowViewStyles, data)
      break

    case 'PDF3':
      layout = PDF3Type(ColumnViewStyles, data)
      break

    default:
      layout = PDF1Type(BulletListStyles, data)
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
