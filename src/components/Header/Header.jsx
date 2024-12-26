import { dataBoxIcon, dataMenu } from '@components/Header/constants';
import BoxIcon from './BoxIcon/BoxIcon';
import styles from './styles.module.scss';
import Menu from '@components/Header/Menu/Menu';
import Logo from '@icons/images/Logo-retina.png';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function MyHeader() {
    const { containerBoxIcon, containerMenu, containerHeader, containerBox, container } = styles;
    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return <BoxIcon type={item.type} href={item.href} />;
                        })}
                    </div>

                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return <Menu content={item.content} href={item.href} />;
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{
                            width: '153px',
                            height: '53px'
                        }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return <Menu content={item.content} href={item.href} />;
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <img width={24} height={24} src={reLoadIcon} alt='reLoadIcon' />
                        <img width={24} height={24} src={heartIcon} alt='heartIcon' />
                        <img width={24} height={24} src={cartIcon} alt='cartIcon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;