import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
    const brandValues = [
        {
            title: 'ĐẬM',
            description: 'Đậm vị bia, đậm món, đậm trải nghiệm – làm gì cũng tới nơi tới chốn.',
            image: '/images/homepage/beer_cheers.png'
        },
        {
            title: 'MỞ',
            description: 'Không gian mở, tinh thần cởi mở, dễ kết nối – ai tới cũng hòa được.',
            image: '/images/menu/mo_image.jpg'
        },
        {
            title: 'ĐÃ',
            description: 'Uống đã, ăn đã, chơi đã – đúng tinh thần beer garden.',
            image: '/images/menu/da_image.jpg'
        },
    ]

    const menuCategories = [
        {
            id: 'grill',
            title: 'ĐỒ NƯỚNG',
            items: [
                { name: "Sườn Nướng Tảng", price: "450k" },
                { name: "Bò Fujinon Áp Chảo", price: "320k" },
                { name: "Dẻ Sườn Nướng", price: "290k" },
                { name: "Tôm Càng Nướng", price: "350k" },
            ]
        },
        {
            id: 'hotpot',
            title: 'LẨU',
            items: [
                { name: "Lẩu Riêu Cua", price: "550k" },
                { name: "Lẩu Thái Hải Sản", price: "490k" },
                { name: "Lẩu Bò Nhúng Dấm", price: "450k" },
            ]
        },
        {
            id: 'beer',
            title: 'BIA',
            items: [
                { name: "Bia Đỉnh Signature", price: "85k" },
                { name: "Hoegaarden Rosee", price: "95k" },
                { name: "Budweiser", price: "55k" },
                { name: "Heineken Silver", price: "45k" },
            ]
        }
    ]

    return (
        <section className={styles.about} id="about">
            {/* TẦM NHÌN Section */}
            <div className={styles.visionSection}>
                <div className={styles.visionOverlay}></div>
                <div className={styles.visionContent}>
                    <h2 className={styles.visionTitle}>TẦM NHÌN</h2>
                    <p className={styles.visionText}>
                        Trở thành điểm hẹn beer garden tiêu biểu, nơi bia ngon, món chất và không khí tụ họp giao thoa,
                        kết nối con người qua những cuộc vui chân thành, cởi mở và đầy năng lượng.
                    </p>
                    <p className={styles.visionText}>
                        <strong>ĐỈNH</strong> hướng tới xây dựng một không gian uống bia đúng chất – ăn ngon đúng gu – gặp nhau đúng lúc,
                        vừa gần gũi, dễ vào, vừa đủ bản sắc để trở thành lựa chọn quen thuộc cho những buổi gặp gỡ, tiếp khách và kết nối dài lâu.
                    </p>
                </div>
            </div>

            {/* TÍNH CÁCH THƯƠNG HIỆU Section */}
            <div className={styles.brandSection}>
                <div className={styles.valuesGrid}>
                    {brandValues.map((value) => (
                        <div key={value.title} className={styles.valueCard}>
                            <div className={styles.valueImageWrapper}>
                                <Image
                                    src={value.image}
                                    alt={value.title}
                                    width={400}
                                    height={300}
                                    className={styles.valueImage}
                                />
                            </div>
                            <div className={styles.valueInfo}>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Introduction Image Section */}
            <div className={styles.introImageSection}>
                <Image
                    src="/images/menu/introduction_image.png"
                    alt="Introduction to Dinh"
                    width={1920}
                    height={1080}
                    className={styles.introImage}
                />
            </div>

            {/* Introduction Detail Split Section */}
            <div className={styles.introSplitSection}>
                <div className={styles.introContentSide}>
                    <h2 className={styles.introHeading}>
                        NÂNG LY<br />
                        CHẠM<br />
                        ĐỈNH
                    </h2>
                    <div className={styles.introText}>
                        <p>
                            ĐỈNH là một beer garden mang tinh thần mở, nơi bia không chỉ để uống mà là chất xúc tác cho kết nối,
                            cảm xúc và những khoảnh khắc chạm đỉnh trong đời sống đô thị. Lấy cảm hứng từ không khí tụ họp quen thuộc
                            của miền Tây – thân tình, thoải mái và đầy sức sống – ĐỈNH tạo nên một không gian nơi mọi người có thể
                            đến gần nhau hơn qua bàn bia, món ngon và câu chuyện.
                        </p>
                        <p>
                            Thương hiệu ĐỈNH được xây dựng trên sự cân bằng giữa năng lượng sôi nổi của beer club và độ chín của trải nghiệm tiếp khách.
                            Bên ngoài là không gian mở, náo nhiệt, phù hợp tụ tập bạn bè; bên trong là những khu vực riêng tư, đủ chỉn chu để gặp gỡ,
                            trò chuyện và kết nối công việc.
                        </p>
                    </div>
                </div>
                <div className={styles.introMenuSide}>
                    <div className={styles.menuHeader}>
                        <span className={styles.introEyebrow}>MÓN NỔI BẬT</span>
                        <a href="#menu" className={styles.viewMenuLink}>Xem toàn bộ thực đơn &rarr;</a>
                    </div>
                    <div className={styles.menuCategoriesWrapper}>
                        {menuCategories.map((category) => (
                            <div key={category.id} className={styles.menuCategoryColumn}>
                                <h3 className={styles.menuCategoryTitle}>{category.title}</h3>
                                <div className={styles.menuCategoryList}>
                                    {category.items.map((item, idx) => (
                                        <div key={idx} className={styles.menuSmallItem}>
                                            <span className={styles.menuSmallName}>{item.name}</span>
                                            <span className={styles.menuSmallLine}></span>
                                            <span className={styles.menuSmallPrice}>{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
