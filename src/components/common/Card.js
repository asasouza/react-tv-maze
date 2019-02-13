//Modules
import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

const Card = props => {
	const { children, image, title } = props;
	const { card, card__body, card__image, card__title } = props.classes;
	return (
		<div className={card}>
			{ image && <img src={image} className={card__image} role='presentation' />}

			<div className={card__body}>
			{ title && <p className={card__title}>{title}</p> }
				{ children }
			</div>
		</div>
	);
};

Card.propTypes = {
	children: PropTypes.node,
	image: PropTypes.string,
	title: PropTypes.string,
};

const styles = {
	card: {
		border: '1px solid #ccc', 
		borderRadius: '3px', 
		boxShadow: '1px 1px #f5f5f5',
	},
	card__body: {
		padding: '10px',
	},
	card__image: {
		width: '100%',
	},
	card__title: {
		fontSize: '20', 
		fontWeight: '700', 
		marginTop: '0'
	},

};

export default injectSheet(styles)(Card);