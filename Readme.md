# Course-Registration

## [ Private Repo Link](https://classroom.github.com/a/8TQS2mML)

Click here for the private repo: [https://classroom.github.com/a/8TQS2mML](https://classroom.github.com/a/8TQS2mML)



##  Questions

- 3 Project features 
  - Dynamic Course Registration
  - Reusable Blog Component
  - Sticky Sidebar

- Discuss how I managed the state in my assignment project.
.............
............
In my project, state management is handled by using React's `useState` and `useEffect` hooks. The `Blogs` component initialize `blogs` for storing fetched course data and `courseNameCalculateCreditHourAndPrice` state use for tracking selected courses. Data fetching occurs in a `useEffect` hook and `setCourseNameCalculateCreditHourAndPrice` setter function gather course information from `data.json` by `useEffect`. The `handleCourseNameCalculateCreditHourAndPrice` function manages course selection, preventing duplicates and exceeding credit limits, and state variables are used to render components dynamically, ensuring accurate and real-time updates. This approach ensures a responsive and user-friendly experience.