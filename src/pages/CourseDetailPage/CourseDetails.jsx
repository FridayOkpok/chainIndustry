import React from "react";
import CourseDetailContainer from "../../component/coursedetails/courseDetails";
import RatingContainer from "../../component/coursedetails/DetailRating";
import CoursesToExploure from "../ExplorePage/EachCourse";
import { useSelector } from "react-redux";

function CourseDetailsPage() {
  const AllCourses = useSelector((store) => store.course.AllCourses);

  const AllCaretigory = AllCourses.map((Element) => {
    return Element.courseCartigory;
  });

  const uniqueArray = AllCaretigory.filter(
    (item, index) => AllCaretigory.indexOf(item) === index
  );

  return (
    <div>
      <CourseDetailContainer />
      <RatingContainer />
      <CoursesToExploure courses={uniqueArray} />
    </div>
  );
}

export default CourseDetailsPage;
