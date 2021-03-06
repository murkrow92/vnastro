/**
 * Created by Murkrow on 5/23/2017.
 */

import {DrawerNavigator, StackNavigator, TabNavigator} from "react-navigation";
import AboutPage from "./components/AboutPage/index";
import OurAstrologersPage from "./components/OurAstrologersPage/index";
import TutorialPage from "./components/TutorialPage/index";
import SettingPage from "./components/SettingPage/index";
import ChatPage from "./components/ChatPage/index";
import PurchasePage from "./components/PurchasePage/index";
import LoginPage from "./components/LoginPage/index";
import ProfilePage from "./components/ProfilePage/index";
import HomePage from "./components/HomePage/index";
import BankPage from "./components/BankPage/index";
import PaymentPage from "./components/PaymentPage/index";
import MethodTransferPage from "./components/PaymentPage/MethodTransferPage/index";
import DetailPage from "./components/DetailPage/index";
import QuestionPage from "./components/QuestionPage/index";
import FriendPage from "./components/FriendPage/index";
import NotificationPage from "./components/NotificationPage/index";
import AstroPage from "./components/AstroPage/index";
import ChartPage from "./components/ChartPage/index";
import React from "react";
import Sidebar from "./components/Sidebar/index";
import AwesomeIcon from "./components/Commons/Icons/AwesomeIcon";
import MaterialCommunityIcon from "./components/Commons/Icons/MaterialCommunityIcon";
import IOIcon from "./components/Commons/Icons/IOIcon";
import colors from "./styles/colors";
import AddFriendPage from "./components/FriendPage/AddFriendPage/index";

export const PayRoute = StackNavigator({
    Payment: {
        screen: PaymentPage
    },
    MethodTransfer: {
        screen: MethodTransferPage
    }
}, {
    headerMode: 'none'
});

export const HomeRoute = StackNavigator({
    Home: {screen: HomePage},
    Detail: {screen: DetailPage},
    Chart: {screen: ChartPage},
    Friend: {screen: FriendPage},
    AddFriend: {screen: AddFriendPage},
    Astro: {screen: AstroPage}

}, {
    headerMode: 'none'
});

export const NotificationRoute = StackNavigator({
    Notification: {
        screen: NotificationPage
    },
    Chat: {
        screen: ChatPage
    }

}, {
    headerMode: 'none'
});

export const BottomRoute = TabNavigator({
    Home: {
        screen: HomeRoute,
        navigationOptions: {
            tabBarIcon: ({tintColor}) =>
                (<AwesomeIcon
                    color={tintColor}
                    name="home"
                    size={24}/>)
        }
    },
    Notification: {
        screen: NotificationRoute,
        navigationOptions: {
            tabBarIcon: ({tintColor}) =>
                (<MaterialCommunityIcon
                    color={tintColor}
                    name="earth"
                    size={24}/>)
        }
    },
    Profile: {
        screen: ProfilePage,
        navigationOptions: {
            tabBarIcon: ({tintColor}) =>
                (<MaterialCommunityIcon
                    color={tintColor}
                    name="account"
                    size={24}/>)
        }
    },
    Bank: {
        screen: BankPage,
        navigationOptions: {
            tabBarIcon: ({tintColor}) =>
                (<IOIcon
                    color={tintColor}
                    name="ios-cash-outline"
                    size={24}/>)
        }
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: colors.BLUE,
        inactiveTintColor: colors.DARKER_GREY,
        indicatorStyle: {
            backgroundColor: 'transparent'
        },
        swipeEnabled: true,
        showLabel: false,
        showIcon: true,
        style: {
            borderWidth: 1,
            backgroundColor: 'white',
            height: 48,
            borderColor: colors.LIST_BOTTOM_BORDER
        }

    }
});

const ContentPage = DrawerNavigator({

    Bottom: {screen: BottomRoute},
    Home: {screen: HomeRoute},
    Profile: {screen: ProfilePage},

    Question: {screen: QuestionPage},
    Detail: {screen: DetailPage},
    Payment: {screen: PayRoute},

    Bank: {screen: BankPage},
    Chat: {screen: ChatPage},
    About: {screen: AboutPage},
    Purchase: {screen: PurchasePage}
}, {
    contentComponent: props => <Sidebar content={props}/>
});


const AppRoute = StackNavigator({
    Login: {
        screen: LoginPage,
    },
    Content: {
        screen: ContentPage,
    }
}, {
    headerMode: 'none'
});

export default AppRoute;