import { useState, useEffect } from "react";
import Blog from "./Blog/Blog";
let globalId = 1;

const Blogs = () => {
  /* this hook will contain primary data from data.json. */
  const [blogs, setBlogs] = useState([]);
  const [
    courseNameCalculateCreditHourAndPrice,
    setCourseNameCalculateCreditHourAndPrice,
  ] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  let remainingCreditHour = 30;

  let totalCreditHour = courseNameCalculateCreditHourAndPrice.reduce(
    (sum, hoursAndCourse) => sum + hoursAndCourse.creditHour,
    0
  );

  let totalPrice = courseNameCalculateCreditHourAndPrice.reduce(
    (sum, hoursAndCourse) => sum + hoursAndCourse.price,
    0
  );

  function handleCourseNameCalculateCreditHourAndPrice(
    id,
    courseName,
    price,
    creditHour
  ) {
    if (courseNameCalculateCreditHourAndPrice.some((item) => item.id === id)) {
      alert("Don't select same course again.");
      return;
    }
    if (totalCreditHour + creditHour > remainingCreditHour) {
      alert("Total credit hours cannot exceed the remaining credit hours.");
      return;
    }
    setCourseNameCalculateCreditHourAndPrice((prev) => [
      ...prev,
      {
        id: id,
        courseName: courseName,
        creditHour: creditHour,
        price: price,
      },
    ]);
  }

  return (
    /* this div is a mother container. this hold all information and content.suppose, blog, credit hour and course name */
    <div className="flex flex-col-reverse md:flex-row justify-center gap-3 md:gap-10 lg:gap-3 items-start mt-5">
      {/* this div extracts blog by using map */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <Blog
            blog={blog}
            key={blog.id}
            handleCourseNameCalculateCreditHourAndPrice={
              handleCourseNameCalculateCreditHourAndPrice
            }
          />
        ))}
      </div>

      {/* this div is a container of course, credit hour and price */}
      <div className="bg-[#FFF] rounded-xl p-2 md:p-5 md:w-[265px] sticky top-1 md:top-2">
        {/* credit hour remaining */}
        <h4 className="text-[#2F80ED] text-xs md:text-lg 2xl:text-xl font-bold whitespace-nowrap">
          Credit hour remaining {remainingCreditHour - totalCreditHour} hr
        </h4>
        <hr className="hr-custom my-1 md:my-3" />
        <ol className="text-[#1C1B1B] text-sm md:text-lg 2xl:text-xl font-bold">
          Course Name
          {courseNameCalculateCreditHourAndPrice.map((hoursAndCourse, idx) => (
            <li
              key={idx}
              className="text-[rgba(28,27,27,0.60)] text-[10px] md:text-sm 2xl:text-base leading-3 md:leading-7"
            >
              {idx + 1} {hoursAndCourse.courseName}
            </li>
          ))}
        </ol>

        <hr className="hr-custom my-1 md:my-3" />

        <h3 className="text-xs md:text-sm 2xl:text-base text-[rgba(28,27,27,0.80)] font-medium">
          Total Credit Hour: {totalCreditHour}
        </h3>
        <hr className="hr-custom my-1 md:my-3" />
        <h3 className="text-xs md:text-sm 2xl:text-base text-[rgba(28,27,27,0.80)] font-medium">
          Total price: {totalPrice.toFixed(2)} USD
        </h3>
      </div>
    </div>
  );
};

export default Blogs;
