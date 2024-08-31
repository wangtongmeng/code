import App, { Container } from "next/app";
import Link from "next/link";
import _appStyle from "./_app.module.css";
import "../styles/global.css";
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
              line-height: 31px;
            }
          `}
        </style>
        <div>
          <header>
            <img src="/images/dog.jpg" className={_appStyle.logo} />
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
          <footer style={{ textAlign: "center" }}>底部</footer>
        </div>
      </div>
    );
  }
}

export default LayoutApp;
