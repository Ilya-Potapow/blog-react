import SortItem from "./UI/select/Select";
import SearchPosts from "./SearchPosts";
import cl from "./../styles/PostsFilter.module.css";
import Checkbox from "./UI/checkbox/Checkbox";

const PostFilter = ({
  filter,
  setFilter,
  limit,
  setLimit,
  update,
  checkCondition,
}) => {
  return (
    <div className={cl.posts_filter}>
      <SearchPosts
        value={filter.search}
        placeholder="Search..."
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />

      <SortItem
        value={filter.sort}
        onChange={(sort) => setFilter({ ...filter, sort: sort })}
        defaultValue="Sotr by..."
        options={[
          { value: "title", name: "By title" },
          { value: "body", name: "By description" },
        ]}
      />
      <Checkbox update={update} label="" />

      {checkCondition ? (
        <SortItem
          value={limit}
          onChange={(value) => setLimit(value)}
          defaultValue="Load posts"
          options={[
            { value: 5, name: "5" },
            { value: 10, name: "10" },
            { value: 25, name: "25" },
            { value: -1, name: "Load all" },
          ]}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default PostFilter;
