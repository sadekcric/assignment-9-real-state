import { useEffect, useState } from "react";
import banner from "../../assets/blogtitle.jpg";
import SingleBlog from "./SingleBlog";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/Blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data.blogs));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-down" data-aos-duration="1500" className="bg-green-50 p-3">
      <div className="relative">
        <div className="mt-10 h-[400px]">
          <img className=" h-full w-full object-cover object-center" src={banner} alt="" />
        </div>

        <div className="w-full  h-full bg-black bg-opacity-50 absolute top-0 z-10">
          <div className=" text-center lg:text-start mx-auto flex flex-col items-center justify-center h-full gap-5 p-3">
            <h1 className=" lg:w-1/2 leading-relaxed text-2xl lg:text-4xl font-bold text-white">
              <span className="text-green-500 inline-block mb-3 lg:text-5xl">Homely Haven,</span> <br />
              Crafting Your Dream Home.
            </h1>
            <p className="lg:w-1/2 text-white lg:text-lg text-md">
              Explore the essence of residential bliss with our blog, where we delve into the art of creating your ideal abode. From design
              inspirations to practical tips, embark on a journey to transform your living space into a sanctuary that reflects your unique
              style and personality.
            </p>
          </div>
        </div>
      </div>

      {/* Blogs */}
      <div data-aos="zoom-in" data-aos-duration="1500" className=" mt-10 lg:mt-24 container mx-auto mb-10">
        <div className=" space-y-2 mb-10">
          <h3 className="text-center font-bold text-3xl lg:text-5xl ">BLOGS</h3>

          <p className="w-1/2 mx-auto lg:text-lg text-md font-semibold text-center">
            Dive into our blog for a treasure trove of design delights and DIY tips, all aimed at helping you craft your dream home.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1500" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 transition">
          {blogs.map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
