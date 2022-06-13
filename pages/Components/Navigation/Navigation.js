import Link from "next/link";
const Navigation = () => {
  return (
    <div className="nav-bar">
      <Link href={`/`}>
        <a>Home</a>
      </Link>
      <Link href={`/users`}>
        <a>Users</a>
      </Link>
      <Link href={`/posts`}>
        <a>Posts</a>
      </Link>
    </div>
  );
};
export default Navigation;
