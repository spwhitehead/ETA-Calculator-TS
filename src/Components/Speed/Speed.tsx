import styles from "./Speed.module.css";

export default function Speed() {
    return (
        <main className={styles.container}>
            <label htmlFor="speed-input">Enter Your Estimated Speed (mph):</label>
            <input type="number" id="speed-input" placeholder="Speed in MPH" className={styles.input} />
        </main>
    );
}