import type React from 'react';

import styles from './button.module.scss';

const Button: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <button className={styles.button} onClick={() => alert('Hello astro!')}>
      {children}
    </button>
  );
};

export default Button;
