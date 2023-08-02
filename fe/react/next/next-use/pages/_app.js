import App from "next/app";
import Link from "next/link";
import _appStyle from "./_app.module.css";
import "../style/global.css";
class LayoutApp extends App {
  render() {
    let { Component } = this.props;
    return (
      <div>
        <style jsx>
          {`
            li {
              display: inline-block;
              margin-left: 10px;
              line-height: 30px;
            }
          `}
        </style>
        <header>
          <div className={_appStyle.logo}>logo</div>
          <ul>
            <li>
              <Link href="/">首页</Link>
            </li>
            <li>
              <Link href="/user">用户管理</Link>
            </li>
            <li>
              <Link href="/profile">个人中心</Link>
            </li>
          </ul>
        </header>
        <Component />
        <footer>页尾</footer>
      </div>
    );
  }
}

export default LayoutApp;
