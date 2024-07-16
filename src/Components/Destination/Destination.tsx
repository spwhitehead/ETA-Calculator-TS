import styles from "./Destination.module.css";

export default function Destination() {
    return (
        <main className={styles.container}>
            <label htmlFor="destination-input">Enter Estimated Number of Miles:</label>
            <input type="number" id="destination-input" className={styles.input} />
        </main>
    );
}