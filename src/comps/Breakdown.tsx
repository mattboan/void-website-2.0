import styles from "@/styles/breakdown.module.scss";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface Props {
    title: string;
    children: ReactNode;
    number: number;
}

export const Breakdown = (props: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div className={styles.breakdown}
            initial={{
                height: "auto",
            }}
            animate={{
                height: open ? "100%" : "10px",
            }}
            transition={{
                duration: 0.25,
                ease: "easeInOut",
            }}
        >
            <div className={styles.header}>
                <div className={styles.header_left}>
                    <div className={styles.number}>
                        {props.number}
                    </div>
                    <h4>{props.title}</h4>
                </div>
                <div className={styles.header_actions}>
                    <div className={styles.header_action} onClick={() => setOpen(!open)}>
                        <div className={styles.header_action_icon}>
                            {open ? "-" : "+"}
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.content}`}>
                {props.children}
            </div>
        </motion.div >
    )

}