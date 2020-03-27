import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24, //Funcionalidade do React Native que dá um padding nas laterais. 
        paddingTop: Constants.statusBarHeight + 20, //Pega o tamanho da StatusBar e dá um padding de + 20px.
    },

    header: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'      
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
        fontWeight: 'bold'
    },

    incidentList: {
        marginTop: 32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row', //Flecha fica do lado.
        justifyContent: 'space-between', //Flecha de um lado e texto de outro.
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#E02041',
        fontWeight: 'bold',
        fontSize: 15
    }

});
