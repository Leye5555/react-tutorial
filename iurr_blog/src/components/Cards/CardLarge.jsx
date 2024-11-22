const CardLarge = ({ post }) => {
  console.log(post);
  return (
    <div className=" flex-1 overflow-hidden relative">
      <div className="absolute z-10 bottom-4 l-4">
        <p className="pl-4 text-white">
          <span className="space-x-2">
            {post.category.map((item, index) => (
              <span key={index + 1} className=" text-xs">
                {item}
              </span>
            ))}{" "}
          </span>
          | <span className="text-xs">{post.duration} minute read</span>
        </p>
        <h1 className=" p-2  text-white text-2xl">{post.title}</h1>
      </div>
      <div className="mask rounded-xl h-[450px] overflow-hidden">
        <img
          className="object-cover min-h-full"
          src={post.post_image_url}
          alt={post.title}
        />
      </div>
    </div>
  );
};

export default CardLarge;
