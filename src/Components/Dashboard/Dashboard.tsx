import styles from "./Dashboard.module.css";
import Destination from "../Destination/Destination";
import Speed from "../Speed/Speed";
import Result from "../Result/Result";

export default function Dashboard() {
    return (
        <main className={styles.container}>
            <div className={styles.layout}>
                <h1 className={styles.heading}>Dashboard</h1>
                <Destination />
                <Speed />
                <button type="button" className={styles.submitBtn}>Calculate ETA</button>
            </div>
            <Result />
        </main>
    );
}