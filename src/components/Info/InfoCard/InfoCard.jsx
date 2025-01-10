import styles from '../styles.module.scss';

function InfoCard({ content, description1, src }) {
    const { containerCard, containerContent, title, description } = styles;
    return (
        <div className={containerCard}>
            <img width={40} height={41} src={src} alt='TruckIcon' />
            <div className={containerContent}>
                <div className={title}>{content}</div>
                <div className={description}>{description1}</div>
            </div>
        </div>
    );
}

export default InfoCard;
