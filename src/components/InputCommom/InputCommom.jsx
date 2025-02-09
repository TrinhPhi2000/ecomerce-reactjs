import { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';
function InputCommom({ label, type, isRequired = false }) {
    const { container, labelInput, boxInput, boxIcon } = styles;

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const isPassword = type === 'password' ? true : false;
    const isShowTextPassword = type === 'password' && showPassword ? 'text' : type;
    return (
        <div className={container}>
            <div className={labelInput}>
                {label}
                {isRequired && <span> * </span>}
            </div>
            <div className={boxInput}>
                <input type={isShowTextPassword} />

                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommom;
