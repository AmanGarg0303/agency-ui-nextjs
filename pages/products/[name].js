import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'
import { data } from '../../data';
import styles from '../../styles/Products.module.css'

const Product = ({ product }) => {
    return (
        <>
            <Head>
                <title>Avocado {product.name}s</title>
                <meta name="description" content={`Avocado provides you the best ${product.name}.`} />
            </Head>


            <div className={styles.container}>
                <div className={styles.cardL}>
                    {product.images.map(img => (
                        <div key={img.id} className={styles.imgContainer}>
                            <Image src={img.url} objectFit='cover' layout='fill' alt='' />
                        </div>
                    ))}</div>
                <div className={styles.cardS}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.desc}>{product.longDesc}</p>
                    <button className={styles.button}>
                        <Link href='/contact'>Contact</Link>
                    </button>
                </div>
            </div>
        </>
    );
}



export const getStaticPaths = () => {
    const products = data
    const paths = products.map(item => {
        return {
            params: { name: item.name }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = (ctx) => {
    const name = ctx.params.name;
    const product = data.filter(item => item.name === name)[0];

    return {
        props: {
            product
        }
    }
}

export default Product;