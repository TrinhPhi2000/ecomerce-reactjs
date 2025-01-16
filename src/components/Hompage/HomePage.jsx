import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadlingListProduct from '@components/HeadlingListProduct/HeadlingListProduct';
import { getProducts } from '@/apis/productsService';
import { useEffect, useState } from 'react';
import PopularProduct from '@components/PopularProduct/PopularProduct';

function HomePage() {
    const { container } = styles;
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        getProducts().then((res) => {
            setListProduct(res.contents);
        });
    }, []);
    console.log(listProduct, 'listproduct');
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadlingListProduct data={listProduct.slice(0, 2)} />
                <PopularProduct data={listProduct.slice(2, 10)} />
                <div style={{ height: '200px' }}></div>
            </div>
        </div>
    );
}

export default HomePage;
