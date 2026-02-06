import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.videoBackground}>
                <iframe
                    src="https://www.youtube.com/embed/GxHyTMZ1bsI?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=GxHyTMZ1bsI"
                    title="Background Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Image
                        src="/images/homepage/Dinh_logo.jpg"
                        alt="ĐỈNH - Vườn Bia Việt Nam"
                        width={150}
                        height={128}
                        className={styles.logoImage}
                        priority
                    />
                </div>
                <h1 className={styles.tagline}>
                    <span>NÂNG LY,</span>
                    <span>CÙNG NHAU,</span>
                    <span className={styles.highlight}>CHẠM ĐỈNH</span>
                </h1>
                <a href="#booking" className={`btn btn-hero ${styles.cta}`}>
                    ĐẶT BÀN NGAY
                    <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
            <div className={styles.scroll}>
                <span>Khám Phá</span>
                <div className={styles.scrollLine}></div>
            </div>
        </section>
    )
}
