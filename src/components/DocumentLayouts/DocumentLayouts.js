import React from 'react';

import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer';


// @TODO i don't like this approach, but it looks simple for now
import RenderLists1       from '~/RenderLists1/RenderLists1';
import RenderLists2       from '~/RenderLists2/RenderLists2';
import RenderLists3       from '~/RenderLists3/RenderLists3';
import RenderLists4       from '~/RenderLists4/RenderLists4';



import styles from './styles';

//@TODO move away switch into a separated function

const DocumentLayouts = ( type, documentTitle, data ) => {
  let layout;

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
            {documentTitle}
          </Text>
          {layout}
        </View>
      </Page>
    </Document>
  )
}

export default DocumentLayouts;
