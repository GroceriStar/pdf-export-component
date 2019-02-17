import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import List2, { Item } from '~/List/List2';


// @TODO move this selector away from this not a container like component.
import styles from "./styles";

const ListsWrapper = ({ department, ingredients }) => (
  <View style={styles.main}>
    <Text style={styles.title}>
      {department}
    </Text>
    <List2>
      {ingredients.map((ingredient, num) => <Item
        key={uuidv1()}>{ingredient}</Item>)}
    </List2>
  </View>
);

// @TODO this is a bad situation where we have a passing data as it is - we use names, not id at not a main container - component
// and this will be hardly to catch later
const RenderLists2 = ({ data }) => (
  <View>
    {data.map(item => (
      <ListsWrapper
        key={uuidv1()}
        department={item.department}
        ingredients={item.ingredients} />
    ))}
  </View>
);


ListsWrapper.propTypes = {
  department: PropTypes.string,
  ingredients: PropTypes.array,
};

export default RenderLists2;
