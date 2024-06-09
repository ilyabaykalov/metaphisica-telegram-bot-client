import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { PATHS } from '@router';

import { useSelector } from 'react-redux';

import { useTelegram } from '@hooks';

import { Header } from '@components';

import { ProductProperties, State } from '@interfaces';

import RubleIcon from '@mui/icons-material/CurrencyRuble';

import styles from './ProductDetailsPage.module.scss';

export const ProductDetailsPage = () => {
	const { setBackButton, onReady } = useTelegram();

	const { productId } = useParams();

	const product: ProductProperties = useSelector(({ productState }: State) =>
		productState.products.find(({ id }) => Number(productId) === id));

	useEffect(() => {
		onReady();

		setBackButton(PATHS.catalog);
	}, []);

	const onBuyButtonClickHandler = () => {

	};

	return (
		<>
			<Header/>

			<img className={ styles.image } src={ product.image } alt={ product.title }/>
			<h1>{ product.title }</h1>
			<span className={styles.price}>{ product.price }<RubleIcon/></span>
			{/* <div className={ styles.card }> */ }
			{/* <p className={styles.title}>{ product.title }</p> */ }
			{/* <p className={styles.price}>Цена: { product.price }₽</p> */ }
			{ product.description.split('\n').map((paragraph, index) => (
				<p key={ `description-paragraph-${ index }` } className={ styles.description }>
					{ paragraph }
				</p>
			)) }

			<button className={styles.button} onClick={onBuyButtonClickHandler}>Купить</button>
			{/* </div> */ }
		</>
	);
};
