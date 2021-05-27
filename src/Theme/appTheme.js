import { StyleSheet } from "react-native";


export const colors = {

    primaryColor: '#00b121',
    primaryDark: '#008000',
    primaryLight:'#5ae455',

    secondary: '#00a997',
    secondaryDark: '#007969',
    secondaryLight: '#57dbc8',

    textOnPrimary: '#fff',
    textOnSecondary: '#fff',

    textOnWhite: '#000',
    textOnBlack: '#fff',
}

export const fontSize = {

    headerListTitle: 25,

    title: 16,
    subtitle: 14,
    callToAction: 12,
    caption: 10,
    description: 10,
    buttonTitle: 16,
}

export const iconSize = {
    card: 20
}

export const styles = StyleSheet.create
({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    secondaryContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    backgroundContainer: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    // atoms
    mainTitle: {
        fontSize: fontSize.title,
        fontWeight: 'bold'
    },

    subtitle: {
        fontSize: fontSize.subtitle,
        textAlign: 'center',
    },

    caption: {
        fontSize: fontSize.caption,
    },

    // ------ primary button
    whiteButton: {
        borderRadius: 25,
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 1,
        padding: 15
    },

    // ------ primary button
    whiteButtonText: {
        fontSize: fontSize.buttonTitle,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    // ------ secondary button
    greenButton: {
        borderRadius: 25,
        backgroundColor: 'transparent',
        borderColor: colors.primaryColor,
        borderWidth: 1,
        padding: 15
    },

    // ------ secondary button
    greenButtonText: {
        fontSize: fontSize.buttonTitle,
        color: colors.primaryColor,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    hyperlink: {
        fontSize: fontSize.buttonTitle,
        color: 'white',
        textAlign: 'center',
    },


    // molecules
    cardTitle: {
        color: colors.textOnPrimary,
        fontSize: fontSize.description,
        fontWeight: "bold"
    },

    cardSubtitle: {
        color: colors.textOnWhite,
        fontSize: fontSize.callToAction,
        fontWeight: "bold"
    },


    // Organisms
    ATAIcon: {
        maxWidth: '35%',
        maxHeight:'90%',
        resizeMode: 'contain',
        marginRight: 20
    },

    packagesTitle: {
        color: colors.primaryColor,
        textAlign: 'center',
        fontSize: 25
    },

    consultCard: {
        flex: 1,

    },


});