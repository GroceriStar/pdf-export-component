import { StyleSheet } from '@react-pdf/renderer'

const documentStyles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#45322E',
    color: 'white',
    // borderBottomWidth: 5,
    //   borderBottomColor: 'red',
    // borderBottomStyle: "solid",
    // padding: 4,
    // border: '1 solid black',
    // borderWidth: 1,
    // borderColor: 'black',
    flexDirection: 'column'
  },
  skills: {
    fontSize: '14px'
    // marginBottom: 10,
  },
  main: {
    marginTop: '10px',
    display: 'flex',
    minHeight: '60px',
    border: '1px solid black',
    width: '300px'
  // borderLeft: '1 solid black',
  // borderRight: '1 solid black',
  },
  block: {

    margin: '0',
    flexDirection: 'column',
    backgroundColor: 'green'
  }
})

const listStyles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    // marginBottom: 5,
    'marginLeft': '25px'
  },
  bulletPoint: {
    width: 10,
    fontSize: 14
  },
  itemContent: {
    flex: 1,
    fontSize: 14
  },
  blockItem: {
    backgroundColor: '#e14427',
    // marginLeft:10,
    border: '1 solid black'
  },
  knob: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    // marginLeft:10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '10px',
    height: '10px',
    borderWidth: 1,
    borderColor: 'black',
    position: 'absolute',
    backgroundColor: 'white',
    fontSize: 8
  }
})

export {
  documentStyles,
  listStyles
}
