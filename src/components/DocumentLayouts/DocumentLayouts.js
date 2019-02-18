import React from 'react';

import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer';

// import styles from './styles'

// @TODO i don't like this approach, but it looks simple for now
import { RenderLists1, RenderLists2, RenderLists3, RenderLists4 } from '/index';



import styles from './styles';

//@TODO move away switch into a separated function

const DocumentLayouts = ( type, name, data ) => {
  let layout;
  console.log(type)
  console.log(name)
  switch(type){
    case 'PDF1':
      layout = <RenderLists1 data={data} />
      break;

    case 'PDF2':
      layout = <RenderLists2 data={data} />
      break;

    case 'PDF3':
      layout = <RenderLists3 data={data} />
      break;

    case 'PDF4':
      layout = <RenderLists4 data={data} />
      break;

    default:
      layout = <RenderLists1 data={data} />
      break;
  }

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.section}>
          <Text style={styles.text}>
            {name}
          </Text>
          {layout}
        </View>
      </Page>
    </Document>
  )
}

export default DocumentLayouts;
