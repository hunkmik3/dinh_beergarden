'use client'

import Image from 'next/image'
import styles from './FloatingContact.module.css'

export default function FloatingContact() {
    return (
        <div className={styles.floatingContainer}>
            <a href="https://zalo.me/yourid" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.zalo}`}>
                <span className={styles.icon}>Zalo</span>
                <span className={styles.label}>Chat Zalo</span>
            </a>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.facebook}`}>
                <div className={styles.iconImageWrapper}>
                    <Image
                        src="/images/menu/—Pngtree—facebook icon fb logo facebook_3562006.png"
                        alt="Facebook"
                        width={35}
                        height={35}
                        className={styles.iconImage}
                    />
                </div>
                <span className={styles.label}>Chat Facebook</span>
            </a>
            <a href="tel:19001234" className={`${styles.btn} ${styles.phone}`}>
                <span className={styles.icon}>📞</span>
                <span className={styles.label}>1900 1234</span>
            </a>
        </div>
    )
}
