import Blogs from "./Blogs/Blogs";
import "./App.css";
function App() {

  return (
    <div className="pt-5 md:pt-10 px-8 md
  :px-6 pb-8 md:pb-16 bg-[#F3F3F3]">
      <h2 className="text-[#1C1B1B] text-xl md:text-3xl font-bold text-center">
        Course Registration
      </h2>

      {/* this Blogs component representative of blog */}
      <Blogs />
    </div>
  );
}

export default App;
