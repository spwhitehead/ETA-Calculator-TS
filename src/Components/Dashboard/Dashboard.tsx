import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import Destination from "../Destination/Destination";
import Speed from "../Speed/Speed";

const Dashboard: React.FC = () => {
    const [state, setState] = useState({ destination: "", speed: "" });
    const [eta, setEta] = useState<number | null>(null);

    const handleChange = (property: "destination" | "speed", value: string | null): void => {
        setState(prevState => ({ ...prevState, [property]: value }));
    } 

    const handleSubmit = (): void => {
        const { destination, speed } = state;

        if (destination === "" || speed === "") {
            alert("Please enter a value for both destination and speed.");
            return;
        }

        // Math for ETA here
        const destinationValue = parseFloat(destination);
        const speedValue = parseFloat(speed);

        const eta = Math.abs((destinationValue / speedValue));
        console.log(`ETA: ${eta.toFixed(2)} hours`);
        setEta(eta); // Update ETA state
    }
// Read Article

    return (
        <main className={styles.container}>
            <div className={styles.layout}>
                <h2 className={styles.heading}>Dashboard</h2>
                    <form className={styles.formFields}>
                        <Destination 
                            destination={state.destination}
                            handleDestinationChange={(newDestination) => handleChange("destination", newDestination)}
                        />
                        <Speed 
                            speed={state.speed}
                            handleSpeedChange={(newSpeed) => handleChange("speed", newSpeed)}
                        />
                    </form>
                <button 
                    onClick={handleSubmit}
                    type="button"
                    className={styles.submitBtn}
                    >Calculate ETA
                </button>
                {/* Display ETA here */}
                {eta !== null && (
                    <div className={styles.result}>
                        <h2>ETA</h2>
                        <h3>{eta.toFixed(2)} hours</h3>
                    </div>
                )}
            </div>
        </main>
    );
}
export default Dashboard;