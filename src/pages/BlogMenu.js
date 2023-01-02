import React from "react";
import BlogMenu from "../components/Blog/BlogMenu";
import FooterB from "../components/Blog/FooterB";
import HeaderB from "../components/Blog/HeaderB";
import Whatsapp from "../components/Whatsapp";

const BlogMenus = () => {
  return (
    <div>
      <HeaderB />
      <BlogMenu />
      <Whatsapp />
      <FooterB />
    </div>
  );
};

export default BlogMenus;
