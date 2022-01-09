import { useNavigate } from "../origin/react-router";
function Home(props) {
  let navigate = useNavigate();
  // 跳转路径可以通过组件，可以通过函数跳转
  function navigateTo() {
    navigate("/profile");
  }
  return (
    <div>
      <p>Home</p>
      <button onClick={navigateTo}>跳转到/profile</button>
    </div>
  );
}

export default Home;
