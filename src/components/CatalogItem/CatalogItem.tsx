import React from 'react';

import { CatalogItemProperties } from '@interfaces';

import styles from './CatalogItem.module.scss';

export const CatalogItem = ({ item }: Properties) => (
	<div className={ styles.card }>
		<img className={styles.image} src={item.image} alt={item.title}/>
		<p className={styles.title}>{ item.title }</p>
		<p className={styles.price}>Цена: { item.price }₽</p>
		<button className={styles.button}>Подробнее</button>
	</div>
);

interface Properties {
	item: CatalogItemProperties;
}
