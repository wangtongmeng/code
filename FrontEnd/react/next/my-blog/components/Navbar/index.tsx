import type { NextPage } from 'next'
import Link from 'next/link';
import { Button } from 'antd'

import styles from './index.module.scss';
import { navs } from './config'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Login from 'components/Login';

const Navbar: NextPage = () => {
  const { pathname } = useRouter()
  const [isShowLogin, setIsShowLogin] = useState(false)

  const handleGotoEditorPage = () => {

  }

  const handleLogin = () => {
    setIsShowLogin(true)
  }

  const handleClose = () => {
    setIsShowLogin(false)
  }

  return (
    <div className={styles.navbar}>
      <section className={styles.logoArea}>blog-c</section>
      <section className={styles.linkArea}>
        {
          navs?.map(nav => (
            <Link key={nav?.label} href={nav?.value}>
              <a className={pathname === nav?.value ? styles.active : ''}>{nav?.label}</a>
            </Link>
          ))
        }
      </section>
      <section className={styles.operationArea}>
        <Button onClick={handleGotoEditorPage}>写文章</Button>
        <Button onClick={handleLogin}>登录</Button>
      </section>
      <Login isShow={isShowLogin} onClose={handleClose} />
    </div>
  )
}

export default Navbar;