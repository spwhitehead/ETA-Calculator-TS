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
        
        // Make sure the fields are not empty
        if (destination === "" || speed === "") {
            alert("Please enter a value for both destination and speed.");
            return;
        }

        // Math for ETA here
        const destinationValue: number = parseFloat(destination);
        const speedValue: number = parseFloat(speed);
        const eta: number = Math.abs((destinationValue / speedValue));

        // Set the ETA (result)
        console.log(`ETA: ${eta.toFixed(2)} hours`); // Log ETA
        setEta(eta); // Update ETA state
    }

    return (
        <main className={styles.container}>
            <div className={styles.layout}>
                <h1 className={styles.heading}>ETA Calculator</h1>
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