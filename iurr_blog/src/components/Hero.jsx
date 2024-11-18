const Hero = () => {
  return (
    <div className="h-[80vh] mt-10 flex w-full px-10">
      <div className=" flex-1">
        <div className="flex gap-2 items-center mb-5">
          <img
            className="w-8 h-8 rounded"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="posts"
          />
          <div className="flex flex-col">
            {" "}
            <span className="text-sm">Dimas Brembo</span>
            <span className="text-xs text-gray-500">Author</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl">
            Women&rsquo;s Basketball Semifinals Preview And Schedule
          </h1>
          <p>
            <span className="text-red-400 text-xs">Olympics</span> |{" "}
            <span className="text-xs">6 minute read</span>
          </p>
          <div className="rounded overflow-hidden h-[26rem]">
            <img
              className="object-cover"
              src="https://images.unsplash.com/photo-1518614368389-5160c0b0de72?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="basketball"
            />
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Hero;
