import React from 'react'
import PropTypes from 'prop-types'

import { Text, View } from '@react-pdf/renderer'

// import { listStyles as styles } from './styles'

// this component important to generation of PDF

// const List = ({ children }) => children

// export const Item = ({ data, styles }) => (
//   <View>
//     <View style={styles.knob} />
//     <View style={styles.item}>
//       <Text style={styles.itemContent}>{data}</Text>
//     </View>
//   </View>
// )

// @TODO tests

const Item = ({ data }) => (
  <View>
    <Text>{data}</Text>
  </View>
)

// List.propTypes = {
//   children: PropTypes.node
// }

Item.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string)
}

export default Item
