'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Menu.module.css'

export default function Menu() {
    return (
        <section className={styles.menu} id="menu">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className="section-title light">THỰC ĐƠN</h2>
                    <span className={styles.icon}>🍺</span>
                </div>

                <div className={styles.imageGrid}>
                    <div className={styles.imageItem}>
                        <Image
                            src="/images/menu/menu1.jpg"
                            alt="Menu Page 1"
                            width={400}
                            height={600}
                            className={styles.menuImage}
                        />
                    </div>
                    <div className={styles.imageItem}>
                        <Image
                            src="/images/menu/menu2.jpg"
                            alt="Menu Page 2"
                            width={400}
                            height={600}
                            className={styles.menuImage}
                        />
                    </div>
                    <div className={styles.imageItem}>
                        <Image
                            src="/images/menu/menu3.jpg"
                            alt="Menu Page 3"
                            width={400}
                            height={600}
                            className={styles.menuImage}
                        />
                    </div>
                </div>

                <a href="#booking" className="btn btn-primary btn-large">TRẢI NGHIỆM NGAY</a>
            </div>
        </section>
    )
}
