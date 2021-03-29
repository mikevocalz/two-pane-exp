import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export interface IRestaurantDetails {
    name: string;
    city: string;
    address: string;
    phoneNumber: string;
    storeHours: string;
    deliveryHours: string;
    gallery: imageRequire[]
}

export type imageRequire = { image: ImageSourcePropType}; 

export interface IMenuItem {
    name: string,
    size: pizzaSize,
    price: number
}

export type pizzaSize = 'SMALL' | 'MEDIUM' | 'LARGE';