import moment from "moment";

const SingleBlog = ({ blog }) => {
  console.log(blog);
  const { profile, title, author, date, content, image } = blog;
  return (
    <>
      <div className="max-w-lg p-4 border-2 border-green-300 rounded-lg dark:bg-gray-50 dark:text-gray-800 hover:bg-green-200 ">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img
                src={profile}
                alt=""
                className="object-cover object-center w-10 h-10 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300"
              />
              <div className="-space-y-1">
                <h2 className="text-sm font-semibold leading-none">{author}</h2>
                <span className="inline-block text-xs leading-none dark:text-gray-600">{moment(`${date}`).startOf("days").fromNow()}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">{title}</h3>
            </a>
            <p className="leading-snug dark:text-gray-600">{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
