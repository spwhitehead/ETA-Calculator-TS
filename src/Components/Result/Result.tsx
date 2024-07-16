import styles from "./result.module.css";

export default function Result() {
    return (
        <main className={styles.result}>
            <h1>ETA</h1>
            <output className={styles.etaOutput}></output> 
        </main>
    );
}