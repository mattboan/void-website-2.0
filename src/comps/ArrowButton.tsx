import Image from "next/image";
import styles from "@/styles/arrowbutton.module.scss";

interface Props {
    unClickable?: boolean;
    direction: "left" | "right";
    onClick: () => void;
}

export const ArrowButton = (props: Props) => {

    // Handle click
    const handle_click = () => {
        if (props.unClickable) return;
        props.onClick();
    }

    return (
        <div className={`${styles.arrow} ${props.direction === "left" ? styles.left : styles.right} ${props.unClickable && styles.unclickable}`} onClick={handle_click}>
            <Image src={`/icons/arrow.png`} width={12} height={12} alt={"Arrow icon for control button"} />
        </div>
    );
} 