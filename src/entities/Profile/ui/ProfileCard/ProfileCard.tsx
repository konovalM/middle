import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    return (
        <div className={classNames(styles.profileCard, {}, [className])}>
            <div className={styles.header}>
                <Text title="Профиль" />
                <Button theme={ButtonTheme.OUTLINE} className={styles.editBtn}>Редактировать</Button>
            </div>
            <div className={styles.data}>
                <Input
                    value={data?.firstName}
                    placeholder="Ваше имя"
                    className={styles.input}
                />
                <Input
                    value={data?.lastName}
                    placeholder="Ваша фамилия"
                    className={styles.input}
                />
            </div>
        </div>
    );
};
