import React from 'react';

const ListF = ({ items, children }) => {
  
 if( items ) {
  items.map( (value) =>
    // console.log(value)
    children(value)
  )
 }  
  
}


export default ListF;
