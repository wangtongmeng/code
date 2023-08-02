import Link from "next/link";
import UserLayout from "./";
import axios from "../../utils/axios";

function UserList(props) {
  console.log("UserList constructor");

  return (
    <UserLayout>
      <ul>
        {props.list.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/user/detail/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </UserLayout>
  );
}

UserList.getInitialProps = async (ctx) => {
  console.log("UserList getInitialProps");
  // let list = [
  //   { id: 1, name: "张三" },
  //   { id: 2, name: "李四" },
  // ];
  let response = await axios({ url: "/api/users", method: "GET" }).then(
    (res) => res.data
  );
  return { list: response.data };
};

export default UserList;
