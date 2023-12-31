import { Breakdown } from "@/comps/Breakdown";
import { Button } from "@/comps/Button";
import { Call } from "@/comps/Call";
import { Footer } from "@/comps/Footer";
import { Header } from "@/comps/Header";
import { RecentWorkList } from "@/comps/RecentWorkList";
import { Testimonial, TestimonialList } from "@/comps/TestimonialList";
import styles from "@/styles/home.module.scss";
import { CaseStudy, get_case_studies } from "@/utils/case-studies.util";
import Head from 'next/head'
import Image from "next/image";
import { useRouter } from "next/router";


export default function Home({ case_studies }: { case_studies: CaseStudy[] }) {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Void | Home</title>
				{/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<main>
				<Header />

				{/* Hero */}
				<div className={styles.hero}>
					<div className={styles.hero_img} />
					{/* <video autoPlay muted loop className={styles.video}>
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video> */}
					<div className={styles.overlay} />
					<div className={styles.hero_text}>
						<h1>
							Leading Web Development.<br />
							Mobile App Development.<br />
							IoT Prototyping.<br />
							Filling the void.<br />
						</h1>
						<Button onClick={() => router.push("/#call")}>
							Start your journey today!
						</Button>
					</div>
				</div>

				{/* Mission statement */}
				<div className={styles.mission}>
					<h2>
						Here at Void Studios our mission is to make people’s living more convenient and efficient by creating cutting edge technology enabling the future.
						<br />
						<br />
						We are here to fill the void.
					</h2>
				</div>

				{/* Recent Work */}
				<RecentWorkList recent_work={case_studies} />

				{/* Our Focus */}
				<div className={styles.focus_con}>
					<h3>Our Focus</h3>
					<div className={styles.focus_items}>
						<div className={styles.focus_item_con}>
							<Image src="/icons/mobile.png" alt="Web Icon" width={140} height={250} />
							<h4>Mobile & Web Apps</h4>
							<p>
								When it comes to mobile apps, we cater to all platforms, be it Android, iOS, or cross-platform solutions. We specialize in seamlessly integrating your business into the digital future, providing you with trustworthy and reliable mobile applications that meet your specific needs.
							</p>
							<div className={styles.a_wrapper}>
								<a href={`services/#mobile`}>See more</a>
							</div>
						</div>

						<div className={styles.focus_item_con}>
							<Image src="/icons/laptop.png" alt="Web Icon" width={140} height={250} />
							<h4>Performant Websites</h4>
							<p>
								In the realm of web development, our focus is on crafting high-performance websites that not only enhance your online presence but also deliver exceptional user experiences. We understand the importance of a well-optimized web presence, and our expertise is geared towards achieving just that.
							</p>
							<div className={styles.a_wrapper}>
								<a href={`services/#web`}>See more</a>
							</div>
						</div>

						<div className={styles.focus_item_con}>
							<Image src="/icons/iot.png" alt="Web Icon" width={140} height={250} />
							<h4>IoT Prototyping</h4>
							<p>With our IoT (Internet of Things) prototyping services, we offer a bridge to the future of interconnected devices. Our team is well-versed in Android, iOS, and cross-platform app development, ensuring that your IoT projects are not just innovative but also built on a solid foundation of reliability.</p>
							<div className={styles.a_wrapper}>
								<a href={`services/#iot`}>See more</a>
							</div>
						</div>
					</div>
				</div>

				{/* CTA */}
				<div className={styles.cta}>
					<h2>
						Got an idea for an app?
						<br />
						Want to revolutionize your business?
						<br />
						Call Void Studios today!
					</h2>
					<div className={styles.button_wrapper}>
						<Button onClick={() => router.push("/#call")}>Book a call today!</Button>
					</div>
				</div>

				{/* Our Process */}
				<div className={styles.process}>
					<h3>Our Process</h3>

					<Breakdown title="Discovery" number={1}>
						<p>
							In the initial phase of our collaboration, we embark on a journey of discovery and innovation. Whether you have a vision for an Android, iOS, or cross-platform mobile app, our team becomes your creative think-tank. We immerse ourselves in brainstorming sessions that are dynamic and collaborative, dissecting your business, understanding its unique requirements, and charting a path toward its future objectives.
							<br />
							<br />

							This phase is about identifying opportunities and addressing challenges. We draw inspiration from the vast digital landscape and the exciting possibilities offered by IoT. With our extensive software development expertise in React, NEXTJS, ExpressJS, and more, we don't just create apps; we craft tailored solutions that set your business apart. Our brainstorming process ensures that your project is not merely another application but a transformative leap into the digital era.
							<br />
							<br />
							Join us in this creative journey, where your ideas seamlessly fuse with our technical prowess, resulting in the realization of your vision in a reliable and innovative manner. Together, we will redefine your digital future.
							<br />
							<br />

						</p>
					</Breakdown>
					<Breakdown title="Research" number={2}>
						<p>
							In the second phase of our collaboration, we continue our journey of innovative exploration. Whether you have a vision for an Android, iOS, or cross-platform mobile app, our team serves as your dedicated think-tank. We engage in dynamic and collaborative brainstorming sessions where we delve deep into your business, its unique requirements, and its future aspirations.
							<br />
							<br />
							This phase is all about unearthing opportunities and tackling challenges. We draw inspiration from the vast digital landscape and the exciting possibilities offered by IoT. Our comprehensive software development expertise in React, NEXTJS, ExpressJS, and more means we don't just create applications; we craft customized solutions that distinguish your business from the rest. Our brainstorming process ensures that your project isn't just another app but a groundbreaking leap into the digital era.
							<br />
							<br />
							Join us in this creative journey, where your ideas harmoniously merge with our technical proficiency, bringing your vision to life in a reliable and innovative way. Together, we will redefine your digital future.
							<br />
							<br />

						</p>
					</Breakdown>
					<Breakdown title="Design" number={3}>
						<p>
							In the third phase of our collaboration, we transition from ideation to design, bringing your vision to life. Whether you have a vision for an Android, iOS, or cross-platform mobile app, our team acts as your creative think-tank. We engage in dynamic and collaborative brainstorming sessions, delving deep into your business, understanding its unique requirements, and charting a path toward its future aspirations.
							<br />
							<br />
							During this phase, we meticulously craft the visual and functional aspects of your project. Our designs reflect your business identity, brand, and the user experience you aim to deliver. With our expertise in software development, including React, NEXTJS, ExpressJS, and more, we ensure that your project is not just another app but a transformative leap into the digital era.
							<br />
							<br />
							Join us in this creative journey, where your ideas seamlessly blend with our technical prowess, resulting in the realization of your vision in a reliable and innovative way. Together, we will redefine your digital future.
							<br />
							<br />

						</p>
					</Breakdown>
					<Breakdown title="Develop" number={4}>
						<p>
							In the fourth phase of our collaboration, we transition from design to development, turning your vision into a functional reality. Whether you have a vision for an Android, iOS, or cross-platform mobile app, our team continues to be your creative think-tank. We engage in dynamic and collaborative brainstorming sessions, gaining a deep understanding of your business, its unique requirements, and its future objectives.
							<br />
							<br />
							Now, it's time to turn those designs into a tangible product. With our extensive software development expertise in React, NEXTJS, ExpressJS, and more, we embark on the development journey. We don't just create applications; we craft customized solutions that set your business apart. Your project is not just another app; it's a transformational leap into the digital era.
							<br />
							<br />
							Join us in this creative journey, where your ideas seamlessly integrate with our technical proficiency, bringing your vision to life in a reliable and innovative way. Together, we will redefine your digital future.
							<br />
							<br />

						</p>
					</Breakdown>
					<Breakdown title="Iterate" number={5}>
						<p>
							In the fifth and ongoing phase of our collaboration, we enter the "Iterate" stage, where your project continues to evolve and improve. This phase is all about refinement and enhancement, ensuring that your digital solutions remain adaptable and in sync with your changing requirements and industry standards.
							<br />
							<br />

							Much like your business seeks continuous improvement, we apply the same philosophy to your Android, iOS, or cross-platform mobile apps, websites, or IoT prototypes. Our commitment to React, NEXTJS, ExpressJS, and other technologies ensures that your digital assets stay reliable and cutting-edge. We don't just deliver a project and walk away; we are dedicated to its continuous growth and optimization.
							<br />
							<br />

							Together, we build a lasting partnership that empowers your business to thrive in the dynamic digital landscape, ensuring that your digital solutions are always at the forefront of technology and industry trends.
							<br />
							<br />

						</p>
					</Breakdown>
				</div>

				{/* Testimonials */}
				<div className={styles.testimonials}>
					<h3>What our clients have to say.</h3>
					<TestimonialList testimonials={testimonials} />
				</div>

				{/* Cal.com - Book a call */}
				<Call />

				<Footer />
			</main >
		</>
	)
}

// Get server side props
export async function getServerSideProps() {
	const case_studies = await get_case_studies();

	return {
		props: {
			case_studies
		}
	}
}

// Define some testimonials
export const testimonials: Testimonial[] = [
	{
		logo: "/img/mediaonmars.png",
		name: "Kammi Rapsey",
		position: "Principle",
		comment: "We have worked with Matt for many years and find him a pleasure to work with. He has a can-do work ethic and is professional and reliable."
	},
	{
		logo: "/img/23rd.png",
		name: "Bailey Robinson",
		position: "Founder",
		comment: "Matt is a great Software Engineer and has been a pleasure to work with. He has a great work ethic and is always willing to go the extra mile."
	},
	{
		logo: "/img/bheg.png",
		name: "Nick Boan",
		position: "Director",
		comment: "Matt has determination and a tenacious attitude towards his work, can always rely on him to deliver on a project."
	}
]
