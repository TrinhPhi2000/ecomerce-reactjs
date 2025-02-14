import { dataBoxIcon, dataMenu } from '@components/Header/constants';
import BoxIcon from './BoxIcon/BoxIcon';
import styles from './styles.module.scss';
import Menu from '@components/Header/Menu/Menu';
import Logo from '@icons/images/Logo-retina.png';
import { TfiReload } from 'react-icons/tfi';
import { BsHeart } from 'react-icons/bs';
import { PiShoppingCart } from 'react-icons/pi';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useEffect, useState, useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';

function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    useEffect(() => {
        // if (scrollPosition > 80) {
        //     setFixedPosition(true);
        // } else {
        //     setFixedPosition(false);
        // }
        // setFixedPosition(scrollPosition > 80 ? true : false);
        setFixedPosition(scrollPosition > 80);
    }, [scrollPosition]);

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
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
                            return (
                                <Menu
                                    content={item.content}
                                    href={item.href}
                                    setIsOpen={setIsOpen}
                                />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{
                                fontSize: '20px'
                            }}
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <BsHeart
                            style={{
                                fontSize: '20px'
                            }}
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <PiShoppingCart
                            style={{
                                fontSize: '25px'
                            }}
                            onClick={() => handleOpenSideBar('cart')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
