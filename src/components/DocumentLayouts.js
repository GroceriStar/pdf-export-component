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

import BulletListStyles from './LayoutTypes/LayoutStyles/BulletList'
import RowViewStyles from './LayoutTypes/LayoutStyles/RowView'
import ColumnViewStyles from './LayoutTypes/LayoutStyles/ColumnView'


// @TODO move away switch into a separated function

const SelectMainLayout = (type, data) => {
    switch (type) {
        case 'PDF1':
            return <MainLayout styles={BulletListStyles} data={data} />
            break

        case 'PDF2':
            return <MainLayout styles={RowViewStyles} data={data} />
            break

        case 'PDF3':
            return <MainLayout styles={ColumnViewStyles} data={data} />
            break

        default:
            return <MainLayout styles={BulletListStyles} data={data} />
            break
    }
}

const DocumentLayouts = (type, documentTitle, data) => {
    return (
        <Document>
            <Page size='A4' style={styles.page} wrap>
                <View style={styles.section}>
                    <Text style={styles.text}>
                        {documentTitle}
                    </Text>
                    {SelectMainLayout(type, data)}
                </View>
            </Page>
        </Document>
    )
}

export default DocumentLayouts
