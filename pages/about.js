import Head from 'next/head'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.subContainer1}>
                
            <div className={styles.imageContainer} >
                
                <img src="/AboutusImg1.jpeg" alt="image1" className={styles.imageclass}></img>
            </div>
            <div className={styles.paraContainer}>
                <div >
                    <h2 className={styles.redText}>About Us</h2>
                </div>
                <div>
                    <p>
                    This is Gofru aboutus page. We will update the content soon.
                    </p>
                </div>
                <div className={styles.listContainer}>
                    <div >
                    <ul className={styles.About_ul}>
                        <li>one</li><br/>
                        <li>two</li><br/>
                        <li>three</li><br/>
                    </ul>
                    </div>
                    
                    <div  >
                    <ul className={styles.About_ul}>
                        <li>four</li><br/>
                        <li>five</li><br/>
                        <li>six</li><br/>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
            <div className={styles.subContainer2}>
               <div>
                   <h2 className={styles.redText}>Meet The Team</h2>
               </div>
               <div className={styles.personsContainer}>
                    <div  className={styles.persondiv1}>
                
                <img src="/AboutusImg1.jpeg" alt="image1" className={styles.personImageclass}></img>
                <h3 className={styles.marginclass}>CEO</h3>
                    </div>
                    <div  className={styles.persondiv2}>
                
                    <img src="/AboutusImg1.jpeg" alt="image1" className={styles.personImageclass}></img>
                <h3 className={styles.marginclass}>CTO</h3>
                    </div>
            
            </div>
            </div>
        </main>
    )
}
