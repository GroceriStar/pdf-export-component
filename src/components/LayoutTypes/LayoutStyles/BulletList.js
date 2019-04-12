import { StyleSheet } from '@react-pdf/renderer'

const listStyles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,
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
  knob: {
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

const documentStyles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 10,
    color: 'blue'
  }
})

export {
  documentStyles,
  listStyles
}
