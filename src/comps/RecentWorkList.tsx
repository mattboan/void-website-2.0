import styles from "@/styles/recentwork.module.scss";
import { useState } from "react";
import { ArrowButton } from "./ArrowButton";
import { motion } from "framer-motion";
import { CaseStudy } from "@/utils/case-studies.util";


interface Props {
    recent_work: CaseStudy[];
}

export const RecentWorkList = (props: Props) => {
    const [pos, setPos] = useState(0);

    return (
        <div className={styles.recent_work_list_wrapper}>
            {/* Title */}
            <div className={styles.title}>
                <h3>Recent Work</h3>

                <a href="/case-studies">See all Case Studies</a>
            </div>

            {/* List */}
            <motion.div className={styles.list} style={{
                width: `calc(${props.recent_work.length * 100}% + ${props.recent_work.length * 15}px)`,
            }}
                initial={{
                    width: `calc(${props.recent_work.length * 100}% + ${props.recent_work.length * 15}px)`,
                    x: "0%",
                }}
                animate={{
                    x: `calc(-${pos * (100 / props.recent_work.length)}% - ${pos * 15}px)`,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                }}
            >
                {props.recent_work.map((item, index) =>
                    (<RecentWorkItem work={item} key={index} />))}
            </motion.div>

            {/* Controls */}
            <div className={styles.controls}>
                <ArrowButton direction="left" onClick={() => setPos(pos - 1)} unClickable={pos === 0} />
                <ArrowButton direction="right" onClick={() => setPos(pos + 1)} unClickable={pos === props.recent_work.length - 1} />
            </div>

        </div>
    )
}

interface ItemProps {
    work: CaseStudy;
}

export const RecentWorkItem = (props: ItemProps) => {

    return (
        <div className={styles.recent_work_item}>
            <div className={styles.info}>
                <div className={styles.tags_con}>
                    {props.work.tags.map((tag, index) => (
                        <div className={styles.tag} key={index}>
                            {tag}
                        </div>
                    ))}
                </div>

                <h4>{props.work.title}</h4>
                <p>{props.work.short_desc}</p>
                <div className={styles.a_wrapper}>
                    <a href={`case-studies/${props.work.slug}`}>See more</a>
                </div>
            </div>

            <div className={styles.image_con}>
                <div className={styles.image} style={{ backgroundImage: `url(${props.work.header_images?.[0]})` }} />
            </div>
        </div>
    )

}