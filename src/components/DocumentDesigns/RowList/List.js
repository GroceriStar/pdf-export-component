import React from 'react'
import PropTypes from 'prop-types'

import { Text, View } from '@react-pdf/renderer'

// this component important to generation PDF

import { listStyles as styles } from './styles'

const List = ({ children }) => children

export const Item = ({ children }) => (
  <View>
    <View style={[styles.knob]} />
    <View style={styles.item}>
      <Text style={styles.itemContent}>{children}</Text>
    </View>
  </View>
)

List.propTypes = {
  children: PropTypes.node
}

Item.propTypes = {
  children: PropTypes.node
}

export default List