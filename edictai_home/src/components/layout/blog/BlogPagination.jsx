import { Link } from "react-router-dom";

const BlogPagination = () => {
  return (
    <div class="blog-pev-next-wrap">
      <ul class="list-wrap">
        <li>
          <Link to="/blog">
            <i class="far fa-arrow-left"></i>Previous
          </Link>
        </li>
        <li class="next-post">
          <Link to="/blog">
            <i class="far fa-arrow-right"></i>Next
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogPagination;
