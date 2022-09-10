
import styles from "./styles.module.scss";
import logoIgm from '../../../public/images/logo.svg';
import { SignInButton } from "../SignInButton";
import Image from 'next/image';

export function Header(){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logoIgm} alt="logo ignews" />
                <nav>
                    <a className={styles.active} href="#">Home</a>
                    <a href="#">Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    );
}