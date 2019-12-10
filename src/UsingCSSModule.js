import React from 'react';
import classNames from 'classnames/bind';
import styles from './UsingCSSModule.module.css';

console.log(styles);
const cx = classNames.bind(styles);

const UsingCSSModule = () => {
    // return <div className={[styles.box, styles.blue].join(' ')} />
    // return <div className={cx(styles.box, styles.blue)} />
    const isBlue = false;

    return <div className={cx(styles.box, {blue: isBlue})} />
}

export default UsingCSSModule;