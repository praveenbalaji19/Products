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
    searchView: {
        width: "75%",
        marginLeft: "5%",
        height: "50@ms",
        justifyContent: "center",
        borderWidth: '0.5@ms',
        borderRadius: '10@ms',
        borderColor: '#1998FB',
        marginBottom: '15@ms',
        marginTop: '15@ms'
    },
    searchIcon:{
        position:'absolute',
        left: '5@ms',
        top:'10@ms'
    },
    input: {
        paddingLeft: '34@ms',
        fontSize: '14@ms'
    },
    cardContainer: {
        alignItems: 'center',
        marginBottom: '12@ms'
    },
    innerCard: {
        width: "86%",
        padding: '20@ms',
        backgroundColor: "#fff",
        borderRadius:'6@ms'
    },
    flexerRow: {
        flexDirection: 'row',
        paddingTop: '10@ms'
    },
    ratingTxt: {
        color: "black",
        fontSize: '16@ms',
        fontWeight: '600'
    },
    ratingCountTxt: {
        color: "black",
        fontSize: '12@ms',
        fontWeight:'600'
    },
    productTxt: { color: "black", fontSize: '16@ms', fontWeight: 'bold', paddingTop: '20@ms' },
    additionalInfoTxt: { color: "grey", fontSize: '16@ms', fontWeight: '500', paddingTop: '6@ms' },
    priceTxt: { color: "black", fontSize: '16@ms', fontWeight: '600' },
    discountTxt: { color: "grey", fontSize: '14@ms' },
    discountLabelTxt: { color: "orange", fontSize: '14@ms' },
    img250H: {
        width: width * 0.75,
        height: '220@ms',
        alignSelf: 'center'
    },
    img300H: {
        width: width * 0.75,
        height: '280@ms',
        alignSelf: 'center'
    },
    emptyTxt:{
        color: "black",
        fontSize: '16@ms',
        fontWeight:'bold',
        textAlign: 'center',
        marginTop: '200@ms'
    },
    filterView:{
        width: '40@ms',
        height: '50@ms',
        position: 'absolute',
        right: '20@ms',
        top: '15@ms',
        borderWidth: '0.5@ms',
        borderRadius: '5@ms',
        borderColor: '#1998FB',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles