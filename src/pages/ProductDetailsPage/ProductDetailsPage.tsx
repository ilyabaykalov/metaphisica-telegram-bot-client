import React, { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Header } from '@components';

import { ProductProperties, State } from '@interfaces';
import styles from './ProductDetailsPage.module.scss';
import { PATHS } from '@router';

const tg = window.Telegram.WebApp;

export const ProductDetailsPage = () => {
	const navigate = useNavigate();

	const { productId } = useParams();

	const product: ProductProperties = useSelector(({ productState }: State) =>
		productState.products.find(({ id }) => Number(productId) === id));

	useEffect(() => {
		tg.ready();

		tg.BackButton.show();
	}, []);

	tg.onEvent('backButtonClicked', () => {
		navigate(PATHS.catalog);
	});

	return (
		<>
			<Header/>

			<img className={ styles.image } src={ product.image } alt={ product.title }/>
			<h1>{ product.title }</h1>
			{/* <div className={ styles.card }> */ }
			{/* <p className={styles.title}>{ product.title }</p> */ }
			{/* <p className={styles.price}>Цена: { product.price }₽</p> */ }
			{ product.description.split('\n').map((paragraph, index) => (
				<p key={ `description-paragraph-${ index }` } className={ styles.description }>
					{ paragraph }
				</p>
			)) }

			{/* <button className={styles.button}>Добавить в корзину</button> */ }
			{/* </div> */ }
		</>
	);
};
