import styles from "@/styles/button.module.scss"
import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    onClick: () => void;
}

export const Button = (props: Props) => {
    return (
        <button className={styles.button} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

