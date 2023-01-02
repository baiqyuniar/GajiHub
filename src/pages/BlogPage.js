import React from "react";
import Blog from "../components/Blog/Blog";
import FooterB from "../components/Blog/FooterB";
import HeaderB from "../components/Blog/HeaderB";
import Whatsapp from "../components/Whatsapp";

const BlogPage = () => {
  return (
    <div>
      <HeaderB />
      <Blog />
      <Whatsapp />
      <FooterB />
    </div>
  );
};

export default BlogPage;
