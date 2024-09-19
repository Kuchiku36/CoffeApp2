import { create } from 'zustand' ;
import { produce } from 'immer' ;
import { persist,createJSONStorage } from 'zustand/middleware' ; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeData';
import BeansData from '../data/BeansData';


export const useStore = create(
    persist(
        (set,get) => ({
            CoffeList: CoffeeData,
            BeansList: BeansData,
            CartPrice: 0,
            FavoritesList:[],
            CartList:[],
            OrderHistoryList:[],
        }),
        {
            name:'coffe-app',
            storage:createJSONStorage(()=>AsyncStorage),
        }
    ),
) ;
