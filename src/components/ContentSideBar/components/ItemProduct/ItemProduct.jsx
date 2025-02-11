import styles from './styles.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
function ItemProduct() {
    const { container, boxContent, title, price, boxClose } = styles;
    return (
        <div className={container}>
            <img
                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg'
                alt=''
            />
            <div className={boxClose}>
                <IoCloseOutline style={{ fontSize: '25px', color: '#ccc' }} />
            </div>
            <div className={boxContent}>
                <div className={title}>Title product</div>
                <div className={price}>$199</div>
            </div>
        </div>
    );
}

export default ItemProduct;
