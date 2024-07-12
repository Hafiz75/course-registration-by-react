import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Blog = ({ blog, handleCourseNameCalculateCreditHourAndPrice }) => {
  return (
    /* this div representative of per blog */
    <div className="grid p-4 md:w-[300px] bg-[#FFF] rounded-xl text-center md:text-left">
      {/* blog img */}
      <img src={blog.image} alt="" className="w-[200px] md:w-auto mx-auto" />
      {/* blog content container */}
      <div>
        {/* blog title */}
        <h3 className="text-[#1C1B1B] text-sm md:text-base 2xl:text-lg font-semibold whitespace-nowrap">
          {blog.title}
        </h3>
        {/* blog description */}
        <p className="text-[rgba(28,27,27,0.60)] text-xs md:text-sm">{blog.description}</p>
        <ul className="flex justify-between mt-1 md:mt-3">
          <li className="text-xs md:text-base">
            {" "}
            <FontAwesomeIcon icon={faDollarSign} /> Price: {blog.price}
          </li>
          <li className="text-xs md:text-base">
            <FontAwesomeIcon icon={faBookOpen} /> Credit: {blog.credit}hr
          </li>
        </ul>
        <button className="bg-[#2F80ED] w-full rounded-lg text-sm md:text-base text-white font-semibold py-1 md:py-2 mt-[6px] md:mt-3" onClick={()=> handleCourseNameCalculateCreditHourAndPrice(blog.id, blog.title, blog.price, blog.credit)}>Select</button>
      </div>
    </div>
  );
};

export default Blog;
