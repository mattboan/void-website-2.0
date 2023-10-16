import styles from "@/styles/services.module.scss";
import { Header } from "@/comps/Header";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/comps/Button";
import { Call } from "@/comps/Call";
import { Footer } from "@/comps/Footer";


export default function Services() {
    return (
        <>
            <Head>
                <title>Void | Services</title>
            </Head>

            <main>
                <Header />

                <div className={styles.hero}>
                    <div className={styles.hero_content}>
                        <h1>Some hook text here to get the viewer into the page and excited to learn more.</h1>
                        <Button onClick={() => { }}>
                            Join the future today!
                        </Button>
                    </div>
                    <div className={styles.hero_image}>
                        <Image src="/img/services-hero.png" width={750} height={950} alt="Services Hero" />
                    </div>
                </div>

                <div className={styles.services_cta}>
                    <h4>
                        Another secondary hook here to get the viewer to scroll down and learn more about the services.
                    </h4>
                </div>

                <div className={styles.services_list}>
                    <div className={styles.service_item} id="mobile">
                        <div className={styles.content}>
                            <Image src="/icons/mobile.png" alt="Web Icon" width={140} height={250} />
                            <h4>Mobile & Web Apps</h4>
                            <p>Whether you need an Android, iOS, or cross platform mobile app we have you covered. We can seamlessly integrate your business and bring it into the future with a realiable and trustworthy mobile app.</p>
                            <p>Whether you need an Android, iOS, or cross platform mobile app we have you covered. We can seamlessly integrate your business and bring it into the future with a realiable and trustworthy mobile app.</p>

                        </div>
                        <div className={styles.image}>
                            <Image src="/img/23rd-dash-2.png" alt="Mobile App" width={500} height={500} />
                        </div>
                    </div>

                    <div className={styles.service_item} id="web">
                        <div className={styles.content}>
                            <Image src="/icons/laptop.png" alt="Web Icon" width={140} height={250} />
                            <h4>Web Development</h4>
                            <p>Whether you need an Android, iOS, or cross platform mobile app we have you covered. We can seamlessly integrate your business and bring it into the future with a realiable and trustworthy mobile app.</p>

                            <p>Whether you need an Android, iOS, or cross platform mobile app we have you covered. We can seamlessly integrate your business and bring it into the future with a realiable and trustworthy mobile app.</p>
                        </div>
                        <div className={styles.image}>
                            <Image src="/img/23rd-web.png" alt="Mobile App" width={500} height={500} />
                        </div>
                    </div>

                    <div className={styles.service_item} id="iot">
                        <div className={styles.content}>
                            <Image src="/icons/iot.png" alt="Web Icon" width={140} height={250} />
                            <h4>IoT Prototyping</h4>
                            <p>Whether you need an Android, iOS, or cross platform mobile app we have you covered. We can seamlessly integrate your business and bring it into the future with a realiable and trustworthy mobile app.</p>
                            <p>Whether you need an Android, iOS, or cross platform mobile app we have you covered. We can seamlessly integrate your business and bring it into the future with a realiable and trustworthy mobile app.</p>

                        </div>
                        <div className={styles.image}>
                            <Image src="/img/sensor-2.png" alt="Mobile App" width={500} height={500} />
                        </div>
                    </div>
                </div>

                <Call />

                <Footer />
            </main>
        </>
    )
}
