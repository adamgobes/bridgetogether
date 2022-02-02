import React, { ButtonHTMLAttributes, ComponentProps } from 'react';
import styles from './Button.module.css';
import { Spinner } from './Loader';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}


export function Button({ loading = false, children, ...props }: ButtonProps) {
    return (
        <button className={styles.button} {...props}>
            {loading && <Spinner size={20} />}
            {!loading && children}
        </button>
    );
}
