'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
    const [email, setEmail] = useState('')

    const handleNewsletterSubmit = (e) => {
        e.preventDefault()
        if (email) {
            alert('Đăng ký thành công! Cảm ơn bạn đã quan tâm đến ĐỈNH.')
            setEmail('')
        }
    }

    const menuLinks = [
        { href: '#about', label: 'Giới Thiệu' },
        { href: '#menu', label: 'Thực Đơn' },
        { href: '#locations', label: 'Địa Chỉ' },
        { href: '#booking', label: 'Đặt Bàn' },
    ]

    const contactInfo = [
        'Hotline: 1900 123 456',
        'Email: info@dinh.vn',
        'Giờ mở: 10:00 - 23:00',
    ]

    return (
        <footer className={styles.footer} id="contact">
            {/* Filled-Based Pattern - Beer Garden Festive */}


            <div className={styles.topLine}></div>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logoLink}>
                            <Image
                                src="/images/homepage/Dinh_logo.jpg"
                                alt="ĐỈNH - Vườn Bia Việt Nam"
                                width={80}
                                height={68}
                                className={styles.logoImage}
                            />
                        </Link>
                        <p className={styles.tagline}>Nâng Ly, Cùng Nhau, Chạm Đỉnh</p>
                        <div className={styles.brandNav}>
                            <a href="#about">GIỚI THIỆU</a>
                            <a href="#menu">THỰC ĐƠN</a>
                            <a href="#locations">ĐỊA CHỈ</a>
                            <a href="#booking">ĐẶT BÀN</a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h4>Menu</h4>
                        <ul>
                            {menuLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.links}>
                        <h4>Liên Hệ</h4>
                        <ul>
                            {contactInfo.map((info, index) => (
                                <li key={index}>{info}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.newsletter}>
                        <h4>Nhận Ưu Đãi</h4>
                        <p>Đăng ký để nhận thông tin khuyến mãi</p>
                        <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
                            <input
                                type="email"
                                placeholder="Email của bạn"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">→</button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2026 ĐỈNH Beer Garden. All rights reserved.</p>
                    <p>Kết nối với chúng tôi trên mạng xã hội</p>
                </div>
            </div>
        </footer>
    )
}
