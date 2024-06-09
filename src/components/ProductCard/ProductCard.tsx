import React from 'react';

import { useNavigate } from 'react-router-dom';

import { ProductProperties } from '@interfaces';

import styles from './ProductCard.module.scss';

export const ProductCard = ({ product }: Properties) => {
	const navigate = useNavigate();

	const onButtonClickHandler = () => {
		navigate(`/product/${product.id}`);
	};

	return (
		<div className={ styles.card }>
			<img className={ styles.image } src={ product.image } alt={ product.title }/>
			<p className={ styles.title }>{ product.title }</p>
			<p className={ styles.price }>Цена: { product.price }₽</p>
			<button className={ styles.button } onClick={onButtonClickHandler}>Подробнее</button>
		</div>
	);
};

interface Properties {
	product: ProductProperties;
}
