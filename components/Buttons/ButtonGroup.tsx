import React from 'react';
import styles from '../assets/Buttons.module.css';
export const ButtonGroup = ({ children }) => {
  return <div className={styles.buttongroup}>{children}</div>;
};
