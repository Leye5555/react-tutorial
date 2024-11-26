const siteData = Object.freeze({
  navigation: [
    { label: "Home", value: "home" },
    { label: "Join Us", value: "join-us" },
    { label: "Customer Care", value: "customer-care" },
    { label: "Reach out", value: "reach-out" },
    { label: "About us", value: "about-us" },
  ],
  posts: [
    {
      author: "Jason Smith",
      author_profile:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Women's Basketball Semifinals Preview And Schedule",
      slug: "womens-basketball-semifinals-preview-and-schedule",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt cumque impedit dolore suscipit quisquam expedita rem voluptatibus quidem modi ut minus vel tempore aliquam, voluptate voluptatem quod laboriosam laudantium quas magni illum perspiciatis odio. Ea veritatis nulla in consectetur saepe amet tempora facilis dicta harum, earum iusto sed commodi quia rerum hic sit nam, culpa praesentium eos quidem, repudiandae facere itaque possimus minima. Eos dolor quibusdam beatae assumenda id quae ipsam eum saepe pariatur. Assumenda deleniti voluptatem culpa iure nostrum aperiam temporibus ea sunt reiciendis veniam accusantium facilis sint autem, ullam praesentium suscipit alias expedita consequatur quod dolor! Necessitatibus, nisi!",
      createdAt: "1 hour ago",
      post_image_url:
        "https://images.unsplash.com/photo-1518614368389-5160c0b0de72?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: 4, // mins
      category: [
        "Olympics",
        "Sports",
        "Gymnastics",
        "Soccer",
        "Olympics",
        "Sports",
        "Gymnastics",
        "Soccer",
      ],
    },
    {
      author: "Jason Smith",
      author_profile:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Boom, Snoon Dogg: Breakina Electrities",
      slug: "boom-snoon-doga-breaking-electrities1",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt cumque impedit dolore suscipit quisquam expedita rem voluptatibus quidem modi ut minus vel tempore aliquam, voluptate voluptatem quod laboriosam laudantium quas magni illum perspiciatis odio. Ea veritatis nulla in consectetur saepe amet tempora facilis dicta harum, earum iusto sed commodi quia rerum hic sit nam, culpa praesentium eos quidem, repudiandae facere itaque possimus minima. Eos dolor quibusdam beatae assumenda id quae ipsam eum saepe pariatur. Assumenda deleniti voluptatem culpa iure nostrum aperiam temporibus ea sunt reiciendis veniam accusantium facilis sint autem, ullam praesentium suscipit alias expedita consequatur quod dolor! Necessitatibus, nisi!",
      createdAt: "2 hours ago",
      post_image_url:
        "https://images.unsplash.com/photo-1522027353578-d23a7be6d503?q=80&w=2225&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: 4, // mins
      category: ["Olympics", "Sports"],
    },
    {
      author: "Jason Smith",
      author_profile:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Boom, Snoon Dogg: Breakina Electrities",
      slug: "boom-snoon-doga-breaking-electrities2",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt cumque impedit dolore suscipit quisquam expedita rem voluptatibus quidem modi ut minus vel tempore aliquam, voluptate voluptatem quod laboriosam laudantium quas magni illum perspiciatis odio. Ea veritatis nulla in consectetur saepe amet tempora facilis dicta harum, earum iusto sed commodi quia rerum hic sit nam, culpa praesentium eos quidem, repudiandae facere itaque possimus minima. Eos dolor quibusdam beatae assumenda id quae ipsam eum saepe pariatur. Assumenda deleniti voluptatem culpa iure nostrum aperiam temporibus ea sunt reiciendis veniam accusantium facilis sint autem, ullam praesentium suscipit alias expedita consequatur quod dolor! Necessitatibus, nisi!",
      createdAt: "4 hours ago",
      post_image_url:
        "https://images.unsplash.com/photo-1593051500991-b723adf3b770?q=80&w=3666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: 4, // mins
      category: ["Olympics", "Sports"],
    },
    {
      author: "Jason Smith",
      author_profile:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Boom, Snoon Dogg: Breakina Electrities",
      slug: "boom-snoon-doga-breaking-electrities3",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt cumque impedit dolore suscipit quisquam expedita rem voluptatibus quidem modi ut minus vel tempore aliquam, voluptate voluptatem quod laboriosam laudantium quas magni illum perspiciatis odio. Ea veritatis nulla in consectetur saepe amet tempora facilis dicta harum, earum iusto sed commodi quia rerum hic sit nam, culpa praesentium eos quidem, repudiandae facere itaque possimus minima. Eos dolor quibusdam beatae assumenda id quae ipsam eum saepe pariatur. Assumenda deleniti voluptatem culpa iure nostrum aperiam temporibus ea sunt reiciendis veniam accusantium facilis sint autem, ullam praesentium suscipit alias expedita consequatur quod dolor! Necessitatibus, nisi!",
      createdAt: "7 hours ago",
      post_image_url:
        "https://images.unsplash.com/photo-1503486579284-2418f27ccaf7?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: 4, // mins
      category: ["Olympics", "Sports"],
    },
  ],
});

export default siteData;
