const CardSmall = ({ post }) => {
  return (
    <div className="flex flex-col flex-1 min-w-[250px] md:max-w-64 lg:max-w-80  xl:max-w-[unset] overflow-hidden">
      <div className="rounded-lg h-56 overflow-hidden">
        <img
          width={350}
          height={250}
          src={post.post_image_url}
          alt={post.title}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex items-center mt-4 gap-2 text-sm">
        <img
          width={32}
          src={post.author_profile}
          alt={post.author}
          className="h-6 rounded"
        />
        <span>{post.author}</span>|<span>{post.createdAt}</span>
      </div>
      <h3 className="mt-4">{post.title}</h3>
      <div className="max-w-full flex flex-wrap gap-x-2 text-xs">
        {post.category.map((item, index) => (
          <span className="text-orange-600" key={index + 1}>
            {item}
          </span>
        ))}
        |<span>{post.duration} minutes read</span>
      </div>
    </div>
  );
};

export default CardSmall;
