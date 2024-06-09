import React from 'react';

import { ProductProperties } from '@interfaces';

import styles from './ProductCard.module.scss';

export const ProductCard = ({ product }: Properties) => (
	<div className={ styles.card }>
		<img className={styles.image} src={product.image} alt={product.title}/>
		<p className={styles.title}>{ product.title }</p>
		<p className={styles.price}>Цена: { product.price }₽</p>
		<button className={styles.button}>Подробнее</button>
	</div>
);

interface Properties {
	product: ProductProperties;
}
