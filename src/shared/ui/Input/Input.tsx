import React, {
    FC, HTMLAttributes, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type InputAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'readOnly'>

interface InputProps extends InputAttributes{
    className?: string;
    onChange?: (value: string) => void;
    value?: string | number;
    autoFocus?: boolean;
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const [isFocus, setIsFocus] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const {
        className, onChange, value, type = 'text', placeholder, autoFocus, readonly, ...otherProps
    } = props;

    const isCaretVisible = isFocus && !readonly;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };
    const onSelect = (e: any) => {
        setCaretPosition(e.target.selectionStart || 0);
    };
    const onFocus = () => {
        setIsFocus(true);
    };

    const onBlur = () => {
        setIsFocus(false);
    };
    useEffect(() => {
        if (autoFocus) {
            setIsFocus(true);
            inputRef?.current?.focus();
        }
    }, [autoFocus]);

    const mods: Mods = {
        [styles.readonly]: readonly,
    };

    return (
        <div className={classNames(styles.inputWrapper, {}, [className])}>
            {
                placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>
            }
            <div className={styles.caretWrapper}>
                <input
                    type={type}
                    className={styles.input}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    ref={inputRef}
                    value={value}
                    readOnly={readonly}
                    {...otherProps}
                />
                {
                    isCaretVisible
                    && <span className={styles.caret} style={{ left: `${caretPosition * 9}px` }} />
                }
            </div>
        </div>
    );
});
