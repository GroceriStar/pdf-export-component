import React from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid/v1'

import { View } from '@react-pdf/renderer'
import DepartmentLists from 'LayoutItem/DepartmentLists'

import BulletListStyles from './LayoutStyles/BulletList'
import ColumnViewStyles from './LayoutStyles/ColumnView'
import RowViewStyles from './LayoutStyles/RowView'

// @TODO this is a bad situation where we have a passing data as it is - we use names, not id at not a main container - component
// and this will be hardly to catch later
// it was a RenderList1 before

// @TODO this case didn't cover recipes totally.

// @TODO tests

const MainLayout = ({ type, data }) => {
  let styles

  switch (type) {
    case 'PDF1':
      styles = BulletListStyles
      break

    case 'PDF2':
      styles = RowViewStyles
      break

    case 'PDF3':
      styles = ColumnViewStyles
      break

    default:
      styles = BulletListStyles
      break
  }

  // @TODO i think we can/should pass departments/ingredients together.
  // because with this way it wouldn't work on complex cases

  // @TODO we should have a flag that will give us 2 options - generate an id by uuid or use for example item.id for it.
  
  return (
    <View>
      {data && data.map(item => (
        <DepartmentLists
          styles={styles}
          key={uuidv1()}
          department={item.department}
          ingredients={item.ingredients} />
      ))}
    </View>
  )
}

MainLayout.propTypes = {
  // name: PropTypes.array, because getting an error expected array but receiving string
  department: PropTypes.string,
  ingredients: PropTypes.array
}

export default MainLayout
