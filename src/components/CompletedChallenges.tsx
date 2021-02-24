import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/completedChallenges.module.css';

export function CompletedChallenges(){
    const { ChallengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{ChallengesCompleted}</span>
        </div>
    );
}