'use client'

import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
    // Booking Form Logic
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        location: '',
        notes: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Cảm ơn bạn đã đặt bàn! Chúng tôi sẽ liên hệ xác nhận trong vài phút.')
        setFormData({
            name: '',
            phone: '',
            date: '',
            time: '',
            guests: '2',
            location: '',
            notes: '',
        })
    }

    // Locations Data
    const addresses = [
        { name: 'ĐỈNH - Quận 1', address: '123 Lê Lợi, Quận 1, TP.HCM' },
        { name: 'ĐỈNH - Quận 7', address: '456 Nguyễn Thị Thập, Quận 7, TP.HCM' },
        { name: 'ĐỈNH - Thủ Đức', address: '789 Võ Văn Ngân, TP.Thủ Đức' },
    ]

    return (
        <section className={styles.contact} id="contact">
            {/* Anchors for navigation links */}
            <div id="locations" className={styles.anchor}></div>
            <div id="booking" className={styles.anchor}></div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Left Column: Locations */}
                    <div className={styles.locationsColumn}>

                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380.0678925848207!2d105.77649729598015!3d10.057567602630645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a087f942d092eb%3A0xa2a65148b918bc10!2zQ-G7k24gS2jGsMahbmc!5e0!3m2!1sen!2s!4v1770349161958!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="ĐỈNH - Vườn Bia Việt Nam Location"
                                className={styles.mapIframe}
                            ></iframe>
                        </div>

                        <div className={styles.addressInfo}>
                            <div className={styles.hotline}>
                                <span className={styles.hotlineLabel}>📞 HOTLINE:</span>
                                <a href="tel:19001234" className={styles.hotlineNumber}>1900 123 456</a>
                            </div>
                            <div className={styles.addressList}>
                                {addresses.map((item) => (
                                    <div key={item.name} className={styles.addressItem}>
                                        <h4 className={styles.badge}>{item.name}</h4>
                                        <p>{item.address}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Booking Form */}
                    <div className={styles.bookingColumn}>
                        <h2 className={`section-title ${styles.columnTitle}`}>ĐẶT BÀN NGAY</h2>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Họ và tên"
                                    required
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Số điện thoại"
                                    required
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formRow}>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                />
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formRow}>
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className={styles.select}
                                >
                                    <option value="2">2 người</option>
                                    <option value="4">4 người</option>
                                    <option value="6">6 người</option>
                                    <option value="8">8 người</option>
                                    <option value="10">10+ người</option>
                                </select>
                                <select
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                    className={styles.select}
                                >
                                    <option value="">Chọn chi nhánh</option>
                                    <option value="q1">ĐỈNH - Quận 1</option>
                                    <option value="q7">ĐỈNH - Quận 7</option>
                                    <option value="td">ĐỈNH - Thủ Đức</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Ghi chú thêm..."
                                    className={styles.textarea}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">
                                XÁC NHẬN ĐẶT BÀN
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
