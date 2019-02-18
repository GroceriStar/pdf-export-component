import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import List, { Item } from './List';


// @TODO move this selector away from this not a container like component.
import styles from "./styles";

const ListsWrapper = ({ department, ingredients }) => (
  <View>
    <Text style={styles.title}>
      {department}
    </Text>

    <List>
      {ingredients.map((ingredient) => <Item key={uuidv1()}>{ingredient}</Item>)}
    </List>
  </View>
);

// @TODO this is a bad situation where we have a passing data as it is - we use names, not id at not a main container - component
// and this will be hardly to catch later

const RenderLists1 = ({ data }) => (
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

export default RenderLists1;
