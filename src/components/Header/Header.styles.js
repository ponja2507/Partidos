import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({

    contenedorPrincipal: {
        flexDirection: "row",
        width: "100%",
        height: 100,
        backgroundColor: "blue",
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    boton: {
        width: 100,
        height: 40,
        backgroundColor: "green",
        borderRadius: 10,
        marginLeft: 10,
    },
    textBoton: {
        fontSize: 30,
        textAlign: "center",
    },
    text: {
        fontSize: 50,
        textAlign: "center",
        backgroundColor: "orange",
    },
    subContenedores: {
        flex: 1,
    }
})