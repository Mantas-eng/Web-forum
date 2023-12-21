import React from 'react'
import Image from 'next/image';
import styles from '../Forum/styles.module.css';
import portraitsImg from '../Assets/800px-marmot-edit1-50x38.jpg';
import portraitsImg1 from '../Assets/Dominik-Steinmann-40x50.jpg';
import portraitsImg2 from '../Assets/hasty-dev.png';
import portraitsImg3 from '../Assets/m5uhNsEh_400x400-150x150.jpg';

const classNames = `${styles.subforumColumn}`;
const classNamesDesc = `${styles.subforumdescription} ${styles.subforumColumn} ${styles.center}}`;
const classNamesStats = `${styles.subforumstats} ${styles.subforumColumn} ${styles.center}`;
const classNamesStarts = `${styles.subforumstarts} ${styles.subforumColumn} ${styles.center}`;
const Forum = () => {
  return (
    <div className={styles.container}>
        <div className={styles.subforum}>
            <div className={styles.subforum_title}>
                <h1>General Information</h1>
                
            </div>
            <div className={styles.subforum_row}>
            <div className={classNames}>
            <Image className={styles.logo_portraits} src={portraitsImg} alt='bGImg'/>        
                </div>
                <div className={classNamesDesc}>
                    <h1><a href="">how do i deploy my react js website in a server</a></h1>
                    <p>Description Content: just type anything here</p>
                    </div>
                    <div className={classNamesStats}>
                        <span>24 Posts | 15 Topics</span>
                    </div>
                    <div className={classNamesStarts}>
                       <b><a href=""></a></b> Last Post by <a href="">JustAUser</a>
                        on <small>22 Desc 2021</small>
                    </div>
                    <div className={classNames}>
            <Image className={styles.logo_portraits} src={portraitsImg1} alt='bGImg'/>        
                </div>
                <div className={classNamesDesc}>
                    <h1><a href="">ui label with large font size causing huge memory</a></h1>
                    <p>Description Content: with uilabel largr font size results in more memory usage</p>
                    </div>
                    <div className={classNamesStats}>
                        <span>24 Posts | 15 Topics</span>
                    </div>
                    <div className={classNamesStarts}>
                       <b><a href=""></a></b> Last Post by <a href="">JustAUser</a>
                        on <small>22 Desc 2021</small>
                    </div>
                    <div className={classNames}>
            <Image className={styles.logo_portraits} src={portraitsImg2} alt='bGImg'/>        
                </div>
                <div className={classNamesDesc}>
                    <h1><a href="">CSS BUG</a></h1>
                    <p>Description Content: How can i scrape table from </p>
                    </div>
                    <div className={classNamesStats}>
                        <span>24 Posts | 15 Topics</span>
                    </div>
                    <div className={classNamesStarts}>
                       <b><a href=""></a></b> Last Post by <a href=""></a>
                         <small>22 Desc 2021</small>
                    </div>
                    <div className={classNames}>
            <Image className={styles.logo_portraits} src={portraitsImg3} alt='bGImg'/>        
                </div>
                <div className={classNamesDesc}>
                    <h1><a href="">emulator path of android studio for mac</a></h1>
                    <p>Description Content: i upgraded my emulators in android studio hedgehog catalina and my emulators crash the error is 2023-12-20 emulator pixel 6a api 34</p>
                    </div>
                    <div className={classNamesStats}>
                        <span>24 Posts | 15 Topics</span>
                    </div>
                    <div className={classNamesStarts}>
                       <b><a href=""></a></b> Last Post by <a href="">JustAUser</a>
                        on <small>22 Desc 2021</small>
                    </div>
                    <div className={classNames}>
            <Image className={styles.logo_portraits} src={portraitsImg} alt='bGImg'/>        
                </div>
                <div className={classNamesDesc}>
                    <h1><a href="">Why are the results different when multiplying opencv Mats</a></h1>
                    <p>Description Content: here is a 4x4 transform matrix mat 1.0000 </p>
                    </div>
                    <div className={classNamesStats}>
                        <span>24 Posts | 15 Topics</span>
                    </div>
                    <div className={classNamesStarts}>
                       <b><a href=""></a></b> Last Post by <a href="">JustAUser</a>
                        on <small>22 Desc 2021</small>
                    </div>
                </div>
            </div>
            
        </div>
    
  )
}

export default Forum;
