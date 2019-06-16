import React from 'react'
// import PropTypes from 'prop-types'
// @TODO replace uuidv1 later
import uuidv1 from 'uuid/v1'

import { Text, View } from '@react-pdf/renderer'
import List, { Item } from './LayoutItem/LayoutItem'

// @TODO tests

// @TODO add an ability to run this method for complex structures where we have an array with departments and ingredients.
// @TODO give us ability to use uuid or ingredient.id as key for this sub-list
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
