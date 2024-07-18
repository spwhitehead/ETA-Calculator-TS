import React from "react";
import styles from "./Speed.module.css";

// Define the props for Speed
interface SpeedProps{
    speed: string;
    handleSpeedChange: (newSpeed: string) => void;
}

const Speed: React.FC<SpeedProps> = ({ speed, handleSpeedChange}) => {
    return (
        <main className={styles.container}>
            <label htmlFor="speed-input">Enter Your Estimated Speed (mph):</label>
            <input 
            type="number"
            id="speed-input"
            placeholder="Speed in MPH"
            value={speed}
            className={styles.input}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleSpeedChange(event.target.value)} />
        </main>
    );
}

export default Speed;