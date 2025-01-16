import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
function AdvanceHeadling() {
    const { container, title, desc, containerTitle, lineLeft, lineRight } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <div className={desc}>don't miss super offers</div>
                <div className={containerTitle}>
                    <span className={lineLeft}></span>
                    <div className={title}>Our best products</div>
                    <span className={lineRight}></span>
                </div>
            </div>
        </MainLayout>
    );
}

export default AdvanceHeadling;
