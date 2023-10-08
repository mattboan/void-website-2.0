import styles from "@/styles/footer.module.scss";

export const Footer = () => {
    return (
        <div className={styles.footer_wrapper}>
            <div className={styles.socials}>
                <div className={styles.social_link}>
                    <a href="https://www.instagram.com/voidstudios.com.au/">Instagram</a>
                </div>
                <div>|</div>
                <div className={styles.social_link}>
                    <a href="https://www.linkedin.com/in/matt-boan-656561129/">LinkedIn</a>
                </div>
            </div>

            <div className={styles.copy}>
                <p>&copy; {new Date().getFullYear()} Void Studios</p>
            </div>
        </div>
    )
}