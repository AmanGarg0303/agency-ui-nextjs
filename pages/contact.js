import Head from 'next/head';
import Circle from '../components/Circle';
import styles from '../styles/Contact.module.css'

const contact = () => {
    return (
        <>
            <Head>
                <title>Avocado Contact</title>
                <meta name="description" content="Contact the best agency in world. avocado agency" />
            </Head>


            <div className={styles.container}>
                <Circle backgroundColor="green" left="-40vh" top="-20vh" className={styles.circle} />
                <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" className={styles.circle} />
                <h1 className={styles.title}>GET IN TOUCH</h1>

                <form className={styles.form}>
                    <input className={styles.inputS} type="text" placeholder="Name" />
                    <input className={styles.inputS} type="text" placeholder="Phone" />
                    <input className={styles.inputL} type="text" placeholder="Email" />
                    <input className={styles.inputL} type="text" placeholder="Subject" />

                    <textarea
                        className={styles.textArea}
                        type="text"
                        rows={6}
                        placeholder="Message"
                    />
                    <button className={styles.button}>SUBMIT</button>
                </form>
            </div>
        </>
    );
}

export default contact;