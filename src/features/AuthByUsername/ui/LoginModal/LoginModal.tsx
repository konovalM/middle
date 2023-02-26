import { FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

interface LoginModalProps {
    isOpen?: boolean;
    onClose?: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => (
    <Modal
        onClose={onClose}
        isOpen={isOpen}
        lazy
    >
        <LoginForm />
    </Modal>
);
