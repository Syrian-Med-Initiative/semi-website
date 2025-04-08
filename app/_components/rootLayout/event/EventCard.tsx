import Image from 'next/image'
import styles from './EventCard.module.css'
import { eventData } from '@/app/_types/eventData'

// a card component to display event details image, title, date, time, location, description and a button to register
function EventCard({eventData}: {eventData: eventData}) {
    const { image, title, date, time, location, description } = eventData
    return (
        <div className={styles.card}>
            <Image quality={100} src={image} alt="Event" className={styles.image} width={400} height={300} />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.date}>Date: {date}</p>
            <p className={styles.time}>Time: {time}</p>
            <p className={styles.location}>Location: {location}</p>
            <p className={styles.description}>Description: {description}</p>
            <button className={styles.button}>Register</button>
        </div>
    )
}

export default EventCard
