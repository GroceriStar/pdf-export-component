import { StyleSheet } from '@react-pdf/renderer'
// @TODO someone want to replace it with smacss
const documentStyles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#45322E',
    color: 'white',
    padding: 4
  },
  main: {
    marginTop: 10
  }
})

const listStyles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,
    marginLeft: '25px',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
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
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginLeft: 10,
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
