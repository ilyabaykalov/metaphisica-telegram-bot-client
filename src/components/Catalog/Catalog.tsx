import React from 'react';
import { useSelector } from 'react-redux';

import { ProductCard } from '@components';

import { ProductProperties, State } from '@interfaces';

import styles from './Catalog.module.scss';

export const Catalog = () => {
	const products: ProductProperties[] = useSelector(({ productState }: State) => productState.products);

	return (
		<div className={ styles.catalog }>
			{ products.map((item) => (
				<ProductCard key={ item.id } product={ item }/>
			)) }
		</div>
	);
};
