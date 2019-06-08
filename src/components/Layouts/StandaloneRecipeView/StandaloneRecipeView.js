import React from 'react'

import {
  Text,
  View
  // StyleSheet
} from '@react-pdf/renderer'
// import List, { Item } from './List';

// @TODO so we have 3 cases together, but this case is very very different?
// I don't think so

// @TODO change name
const StandaloneRecipeView = ({ data }) => {
  return (
    <View>
      <Text>{data.title}</Text><Text>{data.directions}</Text><Text>{data.ingredients}</Text><Text>{data.prep_time}</Text><Text>{data.total_time}</Text><Text>{data.recipe_yield}</Text><Text>{data.url}</Text>
    </View>
  )
}

export default StandaloneRecipeView
