import { createSlice } from "@reduxjs/toolkit";
import courseImage from "../image/courseImg.png";

const AllCourses = [
  {
    id: "jbhvs98765",
    image: courseImage,
    courseName: "Understanding Mechine Learning",
    rating: "4.95 / 5",
    courseCartigory: "Development",
    level: "Intermediate",
    courseAutoName: "Samuel Otimila",
    price: "paid",
    priceInNaira: 20500,
    priceInDollars: 15.64,
    quantity: 0,
  },
  {
    id: "jijhdnwhin",
    image: courseImage,
    courseName: "A-Z of Graphics",
    rating: "4.95 / 5",
    courseCartigory: "Design",
    level: "Beginner",
    price: "free",
    courseAutoName: "Victor Adebisi",
    priceInNaira: "Free",
    priceInDollars: "",
    quantity: 0,
  },
  {
    id: "smkmkmlskmk9273",
    image: courseImage,
    courseName: "A-Z of web animation using figma.",
    rating: "4.95 / 5",
    courseCartigory: "Development",
    level: "Beginner",
    price: "paid",
    courseAutoName: "Gampa Adebisi",
    priceInNaira: 20000,
    priceInDollars: 15.34,
    quantity: 0,
  },
  {
    id: "lmkfiunwdwj",
    image: courseImage,
    courseName: "A-Z of JavaScript from novies to pro ",
    rating: "4.95 / 5",
    price: "paid",
    courseCartigory: "Development",
    level: "Intermediate",
    courseAutoName: "Joseph Adebisi",
    priceInNaira: 28000,
    priceInDollars: 20.34,
    quantity: 0,
  },
  {
    id: "lmskmfmslmmle",
    image: courseImage,
    courseName: "Project managemenet",
    rating: "4.95 / 5",
    courseCartigory: "Admin and customer support",
    level: "Beginner",
    price: "paid",
    courseAutoName: "samuel Adebisi",
    priceInNaira: 2000,
    priceInDollars: 9.34,
    quantity: 0,
  },
  {
    id: "jkqkwjokmk9273",
    image: courseImage,
    courseName: "A-Z of web animation using figma.",
    rating: "4.95 / 5",
    courseCartigory: "Development",
    level: "Beginner",
    price: "paid",

    courseAutoName: "Gampa Adebisi",
    priceInNaira: 20000,
    priceInDollars: 15.34,
    quantity: 0,
  },
  {
    id: "knkoodnnwi",
    image: courseImage,
    courseName: "A-Z of IOS development using Flutter",
    rating: "4.95 / 5",
    courseCartigory: "Development",
    level: "Beginner",
    price: "paid",

    courseAutoName: "Joseph Adebisi",
    priceInNaira: 20000,
    priceInDollars: 15.34,
    quantity: 0,
  },
  {
    id: "kkskjfowjojwoq",

    image: courseImage,
    courseName: "A-Z of web animation using figma.",
    rating: "4.95 / 5",
    courseCartigory: "Design",
    level: "Beginner",
    price: "paid",

    courseAutoName: "Victor Adebisi",
    priceInNaira: 20000,
    priceInDollars: 15.34,
    quantity: 0,
  },
  {
    id: "kajhjkhkjnfca",

    image: courseImage,
    courseName: "A-Z of web animation using figma.",
    rating: "4.95 / 5",
    courseCartigory: "Design",
    level: "Beginner",
    price: "paid",

    courseAutoName: "Victor Adebisi",
    priceInNaira: 20000,
    priceInDollars: 15.34,
    quantity: 0,
  },
  {
    id: "nkkaojfinnnfnfcfe3",

    image: courseImage,
    courseName: "A-Z of web animation using figma.",
    rating: "4.95 / 5",
    courseCartigory: "Design",
    level: "Beginner",
    price: "paid",

    courseAutoName: "Victor Adebisi",
    priceInNaira: 20000,
    priceInDollars: 15.34,
    quantity: 0,
  },
  {
    id: "92u319undjj",

    image: courseImage,
    courseName: "A-Z of web animation using figma.",
    rating: "4.95 / 5",
    courseCartigory: "Design",
    level: "Beginner",
    price: "paid",

    courseAutoName: "Adebisi",
    priceInNaira: 20000,
    priceInDollars: 15.34,
    quantity: 0,
  },
  {
    id: "najkandbh",
    image: courseImage,
    courseName: "Strategic Marketing implementation  ",
    rating: "4.95 / 5",
    courseCartigory: "Sales and Marketing",
    level: "Professional",
    price: "paid",

    courseAutoName: "Adebisi",
    priceInNaira: 20000,
    priceInDollars: 15.34,
    quantity: 0,
  },
  {
    id: "najnjfnkkfinjbbwn",

    image: courseImage,
    courseName: "Fundamentals of international Marketing",
    rating: "4.95 / 5",
    courseCartigory: "Sales and Marketing",
    level: "Beginner",
    price: "paid",

    courseAutoName: "Adebisi",
    priceInNaira: 20000,
    priceInDollars: 15.34,
    quantity: 0,
  },
];

const CourseStore = createSlice({
  name: "AllCousesStore",
  initialState: {
    AllCourses,
    cartCourses: [],
    selectedCourse: null,
    selectedCategory: "Design",
    selectedPrice: "",
    selectedLevel: "",
    SameCategoryCourses: [],
    categorySpecification: [],
    totalCoursesInCart: 0,
    totalAmountForCourses: 0,
    allAvalableCategory: [],
    coursesToPurchase: [],
    priceOfCoursesToPurchase: "",
    actualPrice: "",
    cartHasItem: false,
  },
  reducers: {
    onExplorBeginnerCourses(state) {
      state.selectedLevel = "Beginner";
    },

    onClearSpecificationString(state) {
      state.selectedPrice = "";
      state.selectedLevel = "";
    },

    onSetCartToTrueFn(state) {
      if (state.cartCourses.length > 0) {
        state.cartHasItem = true;
      }
    },

    onHeaderOptionFn(state, action) {
      const userSpecificDetails = action.payload;
      if (userSpecificDetails.headerName === "Difficulty") {
        state.selectedLevel = userSpecificDetails.element.id;
      }

      if (userSpecificDetails.headerName === "Price") {
        state.selectedPrice = userSpecificDetails.element.id;
      }
    },

    GetSpecifitcCourseCategory(state, action) {
      state.selectedCategory = action.payload;
      let AllCartigoryCourses;
      //! this AllCartigoryCourses will get the couses of all the same cartigory

      if (state.selectedCategory === "all") {
        AllCartigoryCourses = state.AllCourses;
      } else {
        AllCartigoryCourses = state.AllCourses.filter(
          (element) => element.courseCartigory === state.selectedCategory
        );
      }
      //! the grouped categoty will be pushed into the state for usage
      state.SameCategoryCourses = AllCartigoryCourses;
      state.categorySpecification = AllCartigoryCourses;
    },

    onCommissionIsChecked(state) {
      const newPrice = state.actualPrice - 2000;
      state.priceOfCoursesToPurchase = newPrice;
    },

    commissionIsNotChecked(state) {
      state.priceOfCoursesToPurchase = state.actualPrice;
    },

    onReferralIsChecked(state) {
      const priceB4Discount = state.actualPrice;

      const reduction = priceB4Discount * 0.1;
      const result = priceB4Discount - reduction;

      state.priceOfCoursesToPurchase = result;
    },

    onGetCourseBasedOnPrice(state, action) {
      const selectedPrice = action.payload;

      if (selectedPrice === "All") {
        state.categorySpecification = state.SameCategoryCourses;
      } else {
        const AllCartigoryCourses = state.SameCategoryCourses.filter(
          (element) => element.price === selectedPrice
        );

        state.categorySpecification = AllCartigoryCourses;
      }
    },

    onGetCourseBasedOnDeficulty(state, action) {
      const SelectedLevel = action.payload;
      if (SelectedLevel === "All") {
        state.categorySpecification = state.SameCategoryCourses;
      } else {
        const AllCartigoryCourses = state.SameCategoryCourses.filter(
          (element) => element.level === SelectedLevel
        );

        state.categorySpecification = AllCartigoryCourses;
      }
    },

    onGetDifficultyLevelOnCourse(state, action) {
      state.selectedCategory = action.payload;
    },

    onViewAllCategoryHandelerFn(state, action) {
      state.allAvalableCategory = action.payload;
    },

    onRemoveFromCartHandelerFn(state, action) {
      const SelectedCourseId = action.payload;

      if (state.totalCoursesInCart === 1) {
        state.cartCourses = [];
        state.cartHasItem = false;
      }

      //! the newExistingCart will find the  ourse that the id is the same with the selected course
      const newExistingCart = state.cartCourses.filter((course) => {
        return course.id !== SelectedCourseId;
      });

      // !the amountArr consist of all the prices if all courses
      const amountArr = newExistingCart.map((course) => {
        return course.priceInNaira;
      });

      const allPaidCourses = amountArr.filter((element) => {
        return typeof element === "number";
      });

      // !now the conditional statement below will only occure when the array length of the cart courses is greater then 0 in order to havae digit to reduce
      if (allPaidCourses.length > 0) {
        const amount = allPaidCourses.reduce((previousValue, currentValue) => {
          return previousValue + currentValue;
        });

        state.totalAmountForCourses = amount;
      } else {
        state.totalAmountForCourses = 0;
      }

      state.cartCourses = newExistingCart;

      state.totalCoursesInCart--;
    },

    onAddItemToCartHandelerStore(state, action) {
      const newCourse = action.payload;

      // ! the code bellow willl check if the course already exist in the cart list ... if it does then the code will return the call alse it will push the item to the array of curses
      const existingCourse = state.cartCourses.find(
        (course) => course.id === newCourse.id
      );

      if (!existingCourse) {
        state.cartCourses.push({
          id: newCourse.id,
          image: newCourse.image,
          courseAutoName: newCourse.courseAutoName,
          courseName: newCourse.courseName,
          priceInNaira: newCourse.priceInNaira,
          priceInDollars: newCourse.priceInDollars,
        });

        //! increasing the number per each cart item
        state.totalCoursesInCart++;

        // !this is to determine if the curse is free or not
        const paidCartCourse = state.cartCourses.filter((el) => {
          return typeof el.priceInNaira === "number";
        });

        // ! this array contains the list of all paid courses in the array
        const amount = paidCartCourse.map((course) => {
          return course.priceInNaira;
        });

        if (amount.length > 0) {
          const sumAmount = amount.reduce(
            (previous, current) => previous + current
          );

          state.totalAmountForCourses = sumAmount;
          state.actualPrice = sumAmount;
        }
      } else {
        //
      }
    },

    onPurchaseCoursesHandelerFn(state) {
      const coursesInCart = state.cartCourses;

      state.coursesToPurchase = coursesInCart;

      const courseAmount = state.coursesToPurchase.filter((el) => {
        return typeof el.priceInNaira === "number";
      });

      const amount = courseAmount.map((course) => {
        return course.priceInNaira;
      });

      const sumAmount = amount.reduce(
        (previous, current) => previous + current
      );
      state.actualPrice = sumAmount;
    },

    onViewCourseDetailsFn(state, action) {
      state.selectedCourse = action.payload;
    },
  },
});

export const CourseStoreAction = CourseStore.actions;

export default CourseStore;
