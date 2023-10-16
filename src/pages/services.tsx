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
                        <h1>Where creatitivity and technology combine, magic happens.</h1>
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
                        At Void Studios we utilize cutting edge technology in conjuction with world class design to create the best possible experience for your customers.
                    </h4>
                </div>

                <div className={styles.services_list}>
                    <div className={styles.service_item} id="mobile">
                        <div className={styles.content}>
                            <Image src="/icons/mobile.png" alt="Web Icon" width={140} height={250} />
                            <h4>Mobile & Web Apps</h4>
                            <p>
                                Our expertise spans a wide range of mobile and web app development. Whether it's Android, iOS, or cross-platform mobile apps, we bring your ideas to life with precision.
                                <br />
                                <br />
                                For mobile apps, we specialize in user-friendly interfaces and seamless functionality, spanning Android, iOS, and cross-platform development.
                                <br />
                                <br />
                                In the web app arena, we create high-performance websites with expertise in React, NEXTJS, ExpressJS, and more.
                                <br />
                                <br />
                                We prioritize reliability, ensuring your digital assets are future-ready.
                                <br />
                            </p>
                        </div>
                        <div className={styles.image}>
                            <Image src="/img/23rd-dash-2.png" alt="Mobile App" width={500} height={500} />
                        </div>
                    </div>

                    <div className={styles.service_item} id="web">
                        <div className={styles.content}>
                            <Image src="/icons/laptop.png" alt="Web Icon" width={140} height={250} />
                            <h4>Web Development</h4>
                            <p>
                                Our focus is on creating high-performance websites that captivate and excel. Leveraging our expertise in technologies like React, NEXTJS, and ExpressJS, we ensure your web presence meets and exceeds the expectations of your audience.
                                <br />
                                <br />
                                Our goal is to provide you with web solutions that are not only visually appealing but also perform seamlessly, ensuring a remarkable user experience.
                            </p>
                        </div>
                        <div className={styles.image}>
                            <Image src="/img/23rd-web.png" alt="Mobile App" width={500} height={500} />
                        </div>
                    </div>

                    <div className={styles.service_item} id="iot">
                        <div className={styles.content}>
                            <Image src="/icons/iot.png" alt="Web Icon" width={140} height={250} />
                            <h4>IoT Prototyping</h4>
                            <p>
                                We specialize in IoT prototyping, bringing innovative ideas to life. Our proficiency in Android, iOS, and cross-platform app development ensures a comprehensive approach to your IoT projects.
                                <br />
                                <br />
                                We're dedicated to crafting reliable and cutting-edge solutions that propel your IoT concepts into reality, making your interconnected devices smarter and more efficient.
                            </p>
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
