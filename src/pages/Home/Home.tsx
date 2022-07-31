import React from 'react'

import styles from './home.module.scss'
import { useAppSelector } from 'common/hooks/Redux'
import { useTabTitle } from 'common/hooks/Hooks'
import { PageTitles } from 'common/constant/Constant'

const Home = () => {
  useTabTitle(PageTitles.home)
  const { title } = useAppSelector((state) => state.appReducer)
  console.log(title)
  console.log('qqq')
  return <div className={styles.home}>Home</div>
}

export default Home
