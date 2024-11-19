const CardLarge = ({ post }) => {
  console.log(post);
  return (
    <div className=" flex-1 overflow-hidden relative">
      <h1 className="absolute z-10 p-2 bottom-0 text-white text-2xl">
        {post.title}
      </h1>
      <div className="mask rounded-xl h-[450px] overflow-hidden">
        <img
          className=" object-cover"
          src={post.post_image_url}
          alt={post.title}
        />
      </div>
    </div>
  );
};

export default CardLarge;
