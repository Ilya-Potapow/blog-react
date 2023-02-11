import React from "react";
import cl from "./ModalPosts.module.css";

const ModalPosts = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.ModalPosts];

  if (visible) {
    rootClasses.push(cl.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.ModalPostsContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalPosts;
