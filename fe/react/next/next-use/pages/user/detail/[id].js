import UserLayout from "..";
import axios from "../../../utils/axios";
function UserDetail(props) {
  return (
    <UserLayout>
      <p>ID: {props.user.id}</p>
    </UserLayout>
  );
}

UserDetail.getInitialProps = async (ctx) => {
  let response = await axios({
    url: `/api/user/${ctx.query.id}`,
    method: "GET",
  }).then((res) => res.data);
  return { user: response.data };
};

export default UserDetail;
