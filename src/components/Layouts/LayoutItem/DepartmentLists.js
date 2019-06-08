import React from 'react'
// import PropTypes from 'prop-types'
// @TODO replace uuidv1 later
import uuidv1 from 'uuid/v1'

import { Text, View } from '@react-pdf/renderer'
import List, { Item } from './LayoutItem/LayoutItem'

// @TODO tests
const DepartmentLists = ({ department, ingredients, styles }) => (
  <View style={styles.main}>
    <Text style={styles.title}>{department}</Text><List>
      {ingredients.map((ingredient) =>
        <Item key={uuidv1()}>{ingredient}</Item>
      )}
    </List>
  </View>
)

export default DepartmentLists
