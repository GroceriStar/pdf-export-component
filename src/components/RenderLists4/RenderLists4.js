import React from 'react'

import { Text, View } from '@react-pdf/renderer'
// import List, { Item } from './List';

const RenderLists4 = ({ data }) => {
  return (
    <View>
      <Text>{data.title}</Text>
      <Text>{data.directions}</Text>
      <Text>{data.ingredients}</Text>
      <Text>{data.prep_time}</Text>
      <Text>{data.total_time}</Text>
      <Text>{data.recipe_yield}</Text>
      <Text>{data.url}</Text>
    </View>
  )
}

export default RenderLists4
