import type { NextPage } from 'next'
import Link from 'next/link';

import styles from './index.module.scss';
import { navs } from './config'
import { useRouter } from 'next/router';

const Navbar: NextPage = () => {
  const { pathname } = useRouter()

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
    </div>
  )
}

export default Navbar;