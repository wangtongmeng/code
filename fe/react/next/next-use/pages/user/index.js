import Link from "next/link";

function UserLayout(props) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/user/list">用户列表</Link>
        </li>
        <li>
          <Link href="/user/add">添加用户</Link>
        </li>
      </ul>
      <div>{props.children}</div>
    </div>
  );
}

export default UserLayout;
