import siteData from "../constants/site_data";

const Hero = () => {
  const { posts } = siteData;
  const firstPost = posts[0];
  return (
    <section className="h-max mb-20 mt-10 flex w-full gap-10 px-10">
      <div className=" flex-1">
        <div className="flex gap-2 items-center mb-5">
          <img
            className="w-8 h-8 rounded"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="posts"
          />
          <div className="flex flex-col">
            {" "}
            <span className="text-sm">{firstPost.author}</span>
            <span className="text-xs text-gray-500">Author</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl">{firstPost.title}</h1>

          <p>
            <span className="space-x-2">
              {firstPost.category.map((item, index) => (
                <span key={index + 1} className="text-red-400 text-xs">
                  {item}
                </span>
              ))}{" "}
            </span>
            | <span className="text-xs">{firstPost.duration} minute read</span>
          </p>
          <div className="rounded overflow-hidden h-[26rem]">
            <img
              className="object-cover"
              src={firstPost.post_image_url}
              alt="basketball"
            />
          </div>
        </div>
      </div>
      <div className="flex-1">
        {posts.slice(1).map((item, index) => (
          <div key={index + 1} className="flex gap-5 mb-5">
            <div className="flex flex-1 max-w-full w-[50%] flex-col gap-3">
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="text-sm w-full line-clamp-2 max-w-[250px] truncate whitespace-normal ">
                {item.content}
              </p>
              <p className="flex gap-1 items-center">
                <span className="flex gap-x-2 gap-y-0 flex-wrap">
                  {item.category.map((item, index) => (
                    <span key={index + 1} className="text-red-400 text-xs">
                      {item}
                    </span>
                  ))}{" "}
                </span>
                | <span className="text-xs">{item.duration} minute read</span>
              </p>
            </div>
            <img
              className="w-[50%] h-[180px] flex-[0.8] rounded-md"
              src={item.post_image_url}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
