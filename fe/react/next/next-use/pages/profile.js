import router from "next/router";
export default function () {
  return (
    <div>
      <p>User</p>
      <button onClick={() => router.back()}>返回</button>
    </div>
  );
}
