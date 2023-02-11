import React from "react";
import SortItem from "./UI/sort/SortItem";
import SearchPosts from "./SearchPosts";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <SortItem
        value={filter.sort}
        onChange={(sort) => setFilter({ ...filter, sort: sort })}
        defaultValue="Sotr by..."
        options={[
          { value: "title", name: "By title" },
          { value: "body", name: "By description" },
        ]}
      />
      <SearchPosts
        style={{ marginTop: "10px" }}
        value={filter.search}
        placeholder="Search..."
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
    </div>
  );
};

export default PostFilter;
