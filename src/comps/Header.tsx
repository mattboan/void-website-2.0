import Image from "next/image";
import styles from "@/styles/header.module.scss";
import { Button } from "./Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter()

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [menuOpen]);

    return (
        <div className={styles.header}>
            <div className={styles.inner}>
                {/* Left */}
                <div className={styles.logo_con} >
                    <Image src="/logo.png" alt="Void Studios Logo" width={40} height={40} onClick={() => router.push("/")} />
                    <div className={styles.menu_btn} onClick={() => setMenuOpen(!menuOpen)}>
                        <Image src="/icons/menu.svg" alt="Menu Button" width={20} height={20} />
                    </div>
                </div>

                {/* Right */}
                <div className={`${styles.actions_con} ${menuOpen && styles.menu_open}`}>
                    <Link href="/services">Our Services</Link>
                    <Link href="/case-studies">Case Studies</Link>
                    <Link href="/blogs">Blogs</Link>
                    <Button onClick={() => router.push("/#call")}>
                        Book a Call
                    </Button>
                </div>
            </div>
        </div>
    );
}