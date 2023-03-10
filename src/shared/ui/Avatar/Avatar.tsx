import {
    CSSProperties, FC, memo, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = memo(({
    className, src, size, alt,
}: AvatarProps) => {
    const inlineStyles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);
    return (
        <img
            src={src}
            alt={alt}
            style={inlineStyles}
            className={classNames(styles.avatar, {}, [className])}
        />
    );
});
