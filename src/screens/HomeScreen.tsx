import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs' ;

const getCategoriesFromData = (data:any) => {
  let temp:any = {};
  for (let index = 0; index < data.length; index++) {

    if (temp[data[index].name]== undefined) {
      temp[data[index].name] = 1 ;
    } else {
      temp[data[index].name]++ ;
    }
  }
  let categories = Object.keys(temp) ;
  categories.unshift('All') ;
  return categories
} ;

const getCoffeeList = (category: string, data: any) =>{
  if (category == 'All') {
    return data ;
  }else{
    let coffelist = data.filter((item:any)=>item.name == category) ;
    return coffelist ;
  }
} ;


const HomeScreen = () => {

  const CoffeeList = useStore((state:any) => state.CoffeList);
  const BeanList = useStore((state:any) => state.BeanList);
  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList));
  const [shearchText, setShearchText] = useState(undefined);
  const [categoryIndex, setCategoryIndex] = useState({
    index:0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(getCoffeeList(categoryIndex.category, CoffeeList)) ;

  const tabBarHeight = useBottomTabBarHeight() ;
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen