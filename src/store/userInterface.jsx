import { createSlice } from "@reduxjs/toolkit";

const UserInterface = createSlice({
  name: "UiStore",
  initialState: {
    userIsLoggedIn: false,
    onShowPopUpMenu: false,
    onShowCart: false,
    onShowPaymentCard: false,
    onShowUserNotification: false,
  },
  reducers: {
    // show and hide user menu options

    setUserIsLoggedIn(state) {
      state.userIsLoggedIn = !state.userIsLoggedIn;
    },

    setShowUserPopupMenu(state) {
      state.onShowPopUpMenu = !state.onShowPopUpMenu;
    },
    setShowPopupMenuToFalse(state) {
      state.onShowPopUpMenu = false;
    },

    // Show and hide cart section

    setShowCartHandeler(state) {
      state.onShowCart = !state.onShowCart;
    },

    setHideCartHandeler(state) {
      state.onShowCart = false;
    },

    // show and hide payment Component
    setShowPaymentCard(state) {
      state.onShowPaymentCard = !state.onShowPaymentCard;
    },

    setHidePaymentHandeler(state) {
      state.onShowPaymentCard = false;
    },

    // show and hide notification componennt
    setShowUserNotificationHandelerFn(state) {
      state.onShowUserNotification = true;
    },

    SetOnToggleUserNotifiationHandeler(state) {
      state.onShowUserNotification = !state.onShowUserNotification;
    },
  },
});

export const userInterfaceAction = UserInterface.actions;

export default UserInterface;
