import { configureStore } from "@reduxjs/toolkit";
import UserInterface from "./userInterface";
import CourseStore from "./CoursesStore";

const Store = configureStore({
  reducer: {
    ui: UserInterface.reducer,
    course: CourseStore.reducer,
  },
});

export default Store;
