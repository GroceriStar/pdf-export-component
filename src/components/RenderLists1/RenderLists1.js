import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import List1, { Item } from '~/List/List1';


// @TODO move this selector away from this not a container like component.
import styles from "./styles";

const ListsWrapper = ({ department, ingredients }) => (
  <View>
    <Text style={styles.title}>
      {department}
    </Text>
    <List1>
      {ingredients.map((ingredient) => <Item key={uuidv1()}>{ingredient}</Item>)}
    </List1>
  </View>
);

// @TODO this is a bad situation where we have a passing data as it is - we use names, not id at not a main container - component
// and this will be hardly to catch later
// <View>
//   {data.map(item => (
//     <ListsWrapper
//       key={uuidv1()}
//       department={item.department}
//       ingredients={item.ingredients} />
//   ))}
// </View>

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const RenderLists1 = ({ data }) => (
  <View style={styles.section}> 1</View>
);


ListsWrapper.propTypes = {
  department: PropTypes.string,
  ingredients: PropTypes.array,
};

export default RenderLists1;
