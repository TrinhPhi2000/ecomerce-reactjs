import InputCommom from '@components/InputCommom/InputCommom';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function Login() {
    const { container, title, boxRememberme, lostPw, boxButton } = styles;
    return (
        <div className={container}>
            <div className={title}> SIGN IN</div>
            <InputCommom label='Username or Email' type='text' isRequired />
            <InputCommom label='Password' type='password' isRequired />
            <div className={boxRememberme}>
                <input type='checkbox' />
                <span>Remember me</span>
            </div>
            <div className={boxButton}>
                <Button content={'LOGIN'} />
            </div>
            <div className={lostPw}>Lost your password</div>
        </div>
    );
}

export default Login;
