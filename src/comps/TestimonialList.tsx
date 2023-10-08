import styles from "@/styles/testimoniallist.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowButton } from "./ArrowButton";
import { useWindowSize } from "../hooks/useWindowSize";

export interface Testimonial {
    logo: string;
    name: string;
    position: string;
    comment: string;
}

interface Props {
    testimonials: Testimonial[];
}

export const TestimonialList = (props: Props) => {
    const [pos, setPos] = useState(0);
    const size = useWindowSize();
    const [inc_amount, setIncAmount] = useState(500);

    useEffect(() => {
        if (size.width < 576) {
            setIncAmount(size.width + 59)
        } else {
            setIncAmount(500)
        }
    }, [size]);

    return (
        <div className={styles.testimonials_wrapper}>
            <motion.div className={styles.testimonials_wrapper_inner}
                initial={{
                    width: `calc(200% + 30px)`,
                    x: 0
                }}
                animate={{
                    x: `calc(-${pos * inc_amount}px + ${pos * 60}px)`,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                }}
            >

                {props.testimonials.map((item, index) => (
                    <TestimonialItem test={item} key={index} />
                ))}

            </motion.div>

            <div className={styles.controls}>
                <ArrowButton direction="left" onClick={() => setPos(pos - 1)} unClickable={pos === 0} />
                <ArrowButton direction="right" onClick={() => setPos(pos + 1)} unClickable={pos === props.testimonials.length - 1} />
            </div>
        </div>
    )
}

export const TestimonialItem = ({ test }: { test: Testimonial }) => {
    return (
        <div className={styles.testimonial_item}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <div className={styles.img} style={{
                        backgroundImage: `url(${test.logo})`,
                    }} />
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>
                        {test.name}
                    </div>
                    <div className={styles.position}>
                        {test.position}
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                {test.comment}
            </div>
        </div>
    )

}