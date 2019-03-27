import { StyleSheet } from '@react-pdf/renderer'

const documentStyles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#45322E',
    color: 'white',
    flexDirection: 'column'
  },
  skills: {
    fontSize: '14px'
  },
  main: {
    marginTop: '10px',
    display: 'flex',
    minHeight: '60px',
    border: '1px solid black',
    width: '300px'
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
    marginLeft: '25px'
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
    border: '1 solid black'
  },
  knob: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
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
