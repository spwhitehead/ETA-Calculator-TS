import React from "react";
import styles from "./Destination.module.css";

// Define the props for Destination
interface DestinationProps{
    destination: string;
    handleDestinationChange: (newDestination: string) => void;
}
const Destination: React.FC<DestinationProps> = ({ destination, handleDestinationChange }) => {

    return (
        <main className={styles.container}>
            <label htmlFor="destination-input">Enter Estimated Number of Miles:</label>
            <input 
                type="number"
                id="destination-input"
                placeholder="Number of Miles"
                value={destination}
                className={styles.input}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleDestinationChange(event.target.value)}/>
        </main>
    );
};

export default Destination;