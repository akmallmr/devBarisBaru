import {StyleSheet} from 'react-native'

export default StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#393E46',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        backgroundColor: '#706fd3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 5,
    },
    textHeader: {
        color: 'white',
        fontSize: 18,
        paddingTop: 12,
        paddingBottom: 12,
        fontWeight: 'bold'
    },
    textInput: {
        color: '#fff',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 270,
        left: 5,
        paddingLeft: 15,
    },
    footer: {
        paddingBottom: 15,
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 20,
        backgroundColor: '#feca57',
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    addButtonText: {
        color: 'black',
        fontSize: 20,
    },
});