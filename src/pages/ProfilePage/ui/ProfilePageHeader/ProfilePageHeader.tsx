import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(styles.header, {}, [className])}>
            <Text title="Профиль" />
            {readonly ? (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={styles.editBtn}
                    onClick={onEdit}
                >
                    Редактировать
                </Button>
            ) : (
                <>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={styles.saveBtn}
                        onClick={onSave}
                    >
                        Сохранить
                    </Button>
                    <Button
                        theme={ButtonTheme.OUTLINE_RED}
                        className={styles.cancelBtn}
                        onClick={onCancelEdit}
                    >
                        Отменить
                    </Button>
                </>
            )}
        </div>
    );
};
