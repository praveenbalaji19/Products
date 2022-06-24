/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import IIcon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './styles'
import * as _ from 'lodash'
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const FilterScreen = (props) => {

    const [genderArr, setGenderArr] = useState([])
    const [brandArr, setBrandArr] = useState([])
    const [categoryArr, setCategoryArr] = useState([])
    const isDarkMode = useColorScheme() === 'dark';
    const { productList, searchList } = props.data.productReducer
    const { filterObj } = props.data.filterReducer

    useEffect(() => {
        setGenderArr(filterObj.gender)
        setBrandArr(filterObj.brand)
        setCategoryArr(filterObj.categories)
    }, [])

    const onSelect = (id, item) => {
        if (id == "Gender") {
            let newArr = []
            _.forEach(genderArr, res => {
                if (res.id == item.id) {
                    newArr.push({ ...res, selected: !res.selected })
                } else {
                    newArr.push(res)
                }
            })
            setGenderArr(newArr)
        }
        if (id == "Brand") {
            let newArr = []
            _.forEach(brandArr, res => {
                if (res.id == item.id) {
                    newArr.push({ ...res, selected: !res.selected })
                } else {
                    newArr.push(res)
                }
            })
            setBrandArr(newArr)
        }
        if (id == "Category") {
            let newArr = []
            _.forEach(categoryArr, res => {
                if (res.id == item.id) {
                    newArr.push({ ...res, selected: !res.selected })
                } else {
                    newArr.push(res)
                }
            })
            setCategoryArr(newArr)
        }
    }

    const onSubmit = () => {
        let newArr = []
        let finalArr = []
        var isGenderSelected = genderArr.find(ele => ele.selected == true)
        var isBrandSelected = brandArr.find(ele => ele.selected == true)
        if (isGenderSelected || isBrandSelected) {
            if (isGenderSelected) {
                _.forEach(genderArr, res => {
                    if (res.selected) {
                        let genderFilter = productList.filter(ele => (ele.gender.toLowerCase() == res.id.toLowerCase()))
                        newArr = _.concat(newArr, genderFilter)
                    }
                })
            }
            if (isBrandSelected) {
                _.forEach(brandArr, res => {
                    if (res.selected) {
                        let brandFilter = newArr.filter(ele => (ele.brand.toLowerCase() == res.id.toLowerCase()))
                        finalArr = _.concat(finalArr, brandFilter)
                    }
                })
            }
            props.setSearchList({
                data: isBrandSelected ? finalArr : newArr,
                type: "SET_SEARCH_LIST"
            })
        } else {
            props.setProductList({
                data: productList,
                type: "SET_PRODUCT_LIST"
            })
        }
        props.setFilterObj({
            data: {
                "gender": genderArr,
                "brand": brandArr,
                "categories": categoryArr
            },
            type: "SET_FILTER_OBJ"
        })
        props.navigation.goBack()
    }

    const onReset = () => {
        let newgenArr = []
        let newbrandArr = []
        let newcategoryArr = []
        _.forEach(genderArr, res => {
            newgenArr.push({ ...res, selected: false })
        })
        _.forEach(brandArr, res => {
            newbrandArr.push({ ...res, selected: false })
        })
        _.forEach(categoryArr, res => {
            newcategoryArr.push({ ...res, selected: false })
        })
        setGenderArr(newgenArr)
        setBrandArr(newbrandArr)
        setCategoryArr(newcategoryArr)
        props.setProductList({
            data: productList,
            type: "SET_PRODUCT_LIST"
        })
        props.setFilterObj({
            data: {
                "gender": newgenArr,
                "brand": newbrandArr,
                "categories": newcategoryArr
            },
            type: "SET_FILTER_OBJ"
        })
    }

    const FilterComp = (props) => {
        return (
            <>
                <Text style={styles.filterTxt}>{props.id}</Text>
                <View style={styles.filterComp}>
                    <FlatList
                        style={styles.flatListView}
                        showsHorizontalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        data={props.data}
                        numColumns={2}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.checkBoxView} onPress={() => onSelect(props.id, item)}>
                                    <Icon name={item.selected ? 'checkbox-active' : 'checkbox-passive'} color={'grey'} size={20} style={styles.searchIcon} />
                                    <Text style={styles.checkBoxTxt} >{item.id}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        contentContainerStyle={{ paddingBottom: 20, padding: 10 }} />
                </View>
            </>

        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.header}>
                <TouchableOpacity style={styles.backIcon} onPress={() => props.navigation.goBack()}>
                    <IIcon name='arrow-back' color={"#ARrert"} size={26} />
                </TouchableOpacity>
                <Text style={styles.headerTxt}>Filter</Text>
            </View>
            <View style={styles.container}>
                <FilterComp id={"Gender"} data={genderArr} />
                <FilterComp id={"Brand"} data={brandArr} />
                <View style={styles.buttonRower}>
                    <TouchableOpacity onPress={() => onReset()} style={styles.resetBtn}>
                        <Text style={styles.btnTxt}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onSubmit()} style={styles.submitBtn}>
                        <Text style={styles.btnTxt}>Submit</Text>
                    </TouchableOpacity>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterScreen);

