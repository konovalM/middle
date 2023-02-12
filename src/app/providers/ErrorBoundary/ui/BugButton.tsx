import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// специально, чтобы синициировать ошибку
export const BugButton: FC = () => {
    const [error, setError] = useState(false);
    const onThrow = () => { setError(true); };
    useEffect(() => {
        if (error) {
            throw new Error('Нативная ошибка');
        }
    }, [error]);
    return (<Button onClick={onThrow}>Создать ошибку</Button>);
};
