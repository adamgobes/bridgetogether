import React, { ButtonHTMLAttributes, ComponentProps } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
    );
}
