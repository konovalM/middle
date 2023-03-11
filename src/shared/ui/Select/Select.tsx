import {
    ChangeEvent,
    ChangeEventHandler, FC, memo, useMemo,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import styles from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, options, value, onChange, readonly,
    } = props;
    const mods: Mods = {};
    const optionsList = useMemo(() => options?.map((opt) => (
        <option key={opt.value} value={opt.value} className={styles.option}>
            {opt.value}
        </option>
    )), [options]);
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={classNames(styles.selectWrapper, {}, [className])}>
            {
                label && <span className={styles.label}>{`${label}>`}</span>
            }
            <select
                className={styles.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});
