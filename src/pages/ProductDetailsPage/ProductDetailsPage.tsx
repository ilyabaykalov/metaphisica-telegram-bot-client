import React, { useCallback, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { PATHS } from '@router';

import { useSelector } from 'react-redux';

import { useTelegram } from '@hooks';

import { Header } from '@components';

import { ProductProperties, State } from '@interfaces';

import { axios } from '@utils';

import styles from './ProductDetailsPage.module.scss';

export const ProductDetailsPage = () => {
	const {
		onReady,
		openLink,
		getUserData,
		setBackButton,
		setEventMainButtonClick,
		offEventMainButtonClick,
	} = useTelegram();

	const { productId } = useParams();

	const product: ProductProperties = useSelector(({ productState }: State) =>
		productState.products.find(({ id }) => Number(productId) === id));

	// TODO: перенести в redux
	const createInvoice = useCallback(() => {
		const { id, username } = getUserData();
		const orderDate = new Date();

		const invoice = {
			title: 'Счет на оплату',
			description: `Товар: ${ product.title }`,
			payload: `${id}_${username}_${orderDate}`,
			provider_token: '381764678:TEST:87162', // Токен вашего платежного провайдера
			currency: 'RUB', // Валюта счета
			prices: JSON.stringify([ {
				label: 'Сумма к оплате',
				amount: product.price * 100,
			} ]), // Цена в копейках
			need_name: true, // Запрашивать ли имя плательщика
			need_phone_number: true, // Запрашивать ли номер телефона плательщика
			need_email: true, // Запрашивать ли email плательщика
			// need_shipping_address: true, // Запрашивать ли адрес доставки
			is_flexible: false, // Гибкая цена
		};

		axios.post('/createInvoiceLink', invoice)
			.then(({ data }) => openLink(data.result))
			.catch((exception) => console.error(exception.message));
	}, [product]);

	useEffect(() => {
		onReady();

		setBackButton(PATHS.catalog);

		setEventMainButtonClick('Купить', createInvoice);

		return () => offEventMainButtonClick(createInvoice);
	}, []);

	return (
		<>
			<Header/>

			<img className={ styles.image } src={ product.image } alt={ product.title }/>

			<h1>{ product.title }</h1>

			<span className={ styles.price }>{ product.price }₽</span>

			{ product.description.split('\n').map((paragraph, index) => (
				<p key={ `description-paragraph-${ index }` } className={ styles.description }>
					{ paragraph }
				</p>
			)) }
		</>
	);
};
