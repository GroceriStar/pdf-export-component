import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet } from '@react-pdf/renderer';

import { listStyles as styles } from "./styles";

// this component important to generation of PDF


const List = ({ children }) => children;


export const Item  = ({ children }) => (
  <View>
    <View style={[styles.knob]}>
    </View>
    <View style={styles.item}>
      <Text style={styles.itemContent}>
        {children}
      </Text>
    </View>
  </View>
);

List.propTypes = {
  children: PropTypes.node,
};

Item.propTypes = {
  children: PropTypes.node,
};



export default List;
