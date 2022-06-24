import { ScaledSheet } from 'react-native-size-matters'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get("screen")

const styles = ScaledSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ebf0ff"
    },
    header: {
        width: "100%",
        height: "50@ms",
        alignItems: 'center',
        justifyContent: "center",
        borderBottomWidth: '0.5@ms',
        borderColor: '#AEAEAE',
    },
    headerTxt: {
        fontSize: '18@ms',
        fontWeight: "bold"
    },
    checkBoxView: {
        paddingVertical: '6@ms',
        paddingHorizontal: '12@ms',
        marginRight: "5%",
        justifyContent: "center",
        alignItems: 'center',
        borderWidth: '0.5@ms',
        borderRadius: '10@ms',
        borderColor: '#1998FB',
        marginBottom: '10@ms',
        flexDirection: 'row'
    },
    checkBoxTxt: {
        height: null,
        paddingLeft: '10@ms',
        fontSize: '14@ms',
        flexShrink: 1,
        width: width * 0.25
    },
    flexerRow: {
        width: "100%",
        margin: '10@ms'
    },
    filterTxt: { color: "black", fontSize: '16@ms', fontWeight: 'bold', paddingVertical: '16@ms', paddingLeft: '10@ms' },
    backIcon: {
        position: 'absolute',
        top: '15@ms',
        left: '15@ms'
    },
    buttonRower: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: "100%",
        padding: "20@ms"
    },
    resetBtn: {
        paddingVertical: "10@ms",
        width: "100@ms",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "10@ms",
        backgroundColor: '#F07167'
    },
    submitBtn: {
        paddingVertical: "10@ms",
        width: "120@ms",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "10@ms",
        backgroundColor: '#00AFB9'
    },
    btnTxt: {
        fontSize: '16@ms',
        fontWeight: "700",
        color: "#fff"
    },
    filterComp: {
        maxHeight: "300@ms",
        alignItems: "center"
    },
    flatListView: {
        maxHeight: "200@ms",
        width: "90%"
    }
})

export default styles