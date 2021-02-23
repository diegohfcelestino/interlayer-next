import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/diegohfcelestino.png" alt="Diego Henrique Ferreira" />
            <div>
                <strong>Diego Henrique Ferreira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                    </p>
            </div>
        </div>
    );
}