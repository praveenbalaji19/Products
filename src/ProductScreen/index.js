/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    useColorScheme,
    View,
    FlatList,
    Image,
    ActivityIndicator,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import styles from './styles'


const ProductCard = (props) => {
    const { rating, ratingCount, additionalInfo, price, discount, discountDisplayLabel, images, brand } = props.item
    const productImage = images[0].src
    return (
        <View style={styles.cardContainer}>
            <View style={styles.innerCard}>
                {rating > 0 && ratingCount > 0 ?
                    <>
                        <Image source={{ uri: productImage ? productImage.replace('http:', 'https:') : "" }} style={styles.img250H} resizeMode={'contain'} />
                        <Text style={styles.flexerRow}>
                            <Text style={styles.ratingTxt}>{rating + " "}</Text>
                            <Icon name={'star'} color={'green'} size={16} />
                            <Text style={styles.ratingCountTxt}> | {ratingCount + " "}</Text>
                        </Text>
                    </>
                    :
                    <Image source={{ uri: productImage ? productImage.replace('http:', 'https:') : "" }} style={styles.img300H} resizeMode={'contain'} />
                }
                <Text style={styles.productTxt}>{brand}</Text>
                <Text style={styles.additionalInfoTxt}>{additionalInfo}</Text>
                <Text style={styles.flexerRow}>
                    <Text style={styles.priceTxt}>{`Rs.${price} `} </Text>
                    <Text style={styles.discountTxt}>{`Rs.${discount} `}</Text>
                    <Text style={styles.discountLabelTxt}>{discountDisplayLabel + ""}</Text>
                </Text>
            </View>
        </View>
    );
};

const ProductScreen = (props) => {
    const [loader, setLoader] = useState(true)
    const [searchTxt, setSearchTxt] = useState("")
    const isDarkMode = useColorScheme() === 'dark';
    const { productList, searchList } = props.data.productReducer
    useEffect(() => {
        fetch("https://demo7303877.mockable.io/").then(resp => resp.json()).then(res => {

            if (res.products && res.products.length > 0) {
                props.setProductList({
                    data: res.products,
                    type: "SET_PRODUCT_LIST"
                })
                const { primaryFilters } = res.filters
                let genderArr = []
                let brandArr = []
                let categoryArr = []

                _.forEach(primaryFilters.find(ele => ele.id.toLowerCase() == "gender").filterValues, res => {
                    genderArr.push({ ...res, selected: false })
                })
                _.forEach(primaryFilters.find(ele => ele.id.toLowerCase() == "brand").filterValues, res => {
                    brandArr.push({ ...res, selected: false })
                })
                _.forEach(primaryFilters.find(ele => ele.id.toLowerCase() == "categories").filterValues, res => {
                    categoryArr.push({ ...res, selected: false })
                })
                props.setFilterObj({
                    data: {
                        "gender": genderArr,
                        "brand": brandArr,
                        "categories": categoryArr
                    },
                    type: "SET_FILTER_OBJ"
                })
                setLoader(false)
            } else {
                setLoader(false)
            }
        }).catch(err => {
            console.log("err", err)
            setLoader(false)
        })
    }, [])

    const doSearch = (val) => {
        let newList = productList.filter(ele => ele.brand.toLowerCase().includes(val.toLowerCase()))
        props.setSearchList({
            data: newList,
            type: "SET_SEARCH_LIST"
        })
        setSearchTxt(val)
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.header}>
                <Text style={styles.headerTxt}>Products List</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.searchView}>
                    <Icon name='search' color={'grey'} size={26} style={styles.searchIcon} />
                    <TextInput
                        value={searchTxt}
                        onChangeText={(val) => doSearch(val)}
                        style={styles.input}
                        placeholder={"Search by product name"}
                    />
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate("Filter")} style={styles.filterView}>
                    <MIcon name='filter-menu-outline' color={'#fc6538'} size={26} />
                </TouchableOpacity>
                {loader ? <ActivityIndicator size={'large'} color={'violet'} style={{ justifyContent: 'center', marginTop: 200 }} /> :
                    searchList?.length > 0 ?
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={searchList}
                            renderItem={({ item }) => {
                                return (<ProductCard item={item} />)
                            }}
                            contentContainerStyle={{ paddingBottom: 100 }} />
                        :
                        <Text style={styles.emptyTxt}>No Products Found!</Text>
                }
            </View>
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProductList: (data) => { dispatch(data) },
        setSearchList: (data) => { dispatch(data) },
        setFilterObj: (data) => { dispatch(data) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
