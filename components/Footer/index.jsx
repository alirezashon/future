import styles from '../../styles/components/Footer/Footer.module.css'
const Footer = () => {
    return (
        <footer className={styles.footer_section}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={`col-md-4 styles.footer-col`}>
                        <div className={styles.footer_contact}>
                            <p>
                                تماس با ما
                            </p>
                            <div className={styles.contact_link_box}>
                                <a href="">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <span>
                                        آدرس
                                    </span>
                                </a>
                                <a href="">
                                    <div className="d-flex justify-content-center">
                                        <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                                        <p className="my-0" style={{ direction: 'ltr' }}>
                                            0910 000 0000
                                        </p>
                                    </div>
                                </a>
                                <a href="">
                                    <i className="bi bi-envelope-fill"></i>
                                    <span>
                                        demo@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md styles.footer-col`}>
                        <div className={styles.footer_detail}>
                            <a href="" className={styles.footerLogo}>
                                webprog.io
                            </a>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            </p>
                            <div className={styles.footerSocial}>
                                <a href="">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="">
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href="">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a href="">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="">
                                    <i className="bi bi-pinterest"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4 styles.footer-col`}>
                        <p>
                            ساعت کاری
                        </p>
                        <p>
                            هر روز
                        </p>
                        <p>
                            10.00 صبح تا 12.00 شب
                        </p>
                    </div>
                </div>
                <div className={styles.footerInfo}>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer