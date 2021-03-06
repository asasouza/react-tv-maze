//Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons/faStar';
import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

const FavoriteButton = props => {
	const { addFavorite, isFavorite, removeFavorite } = props;
	const { cardShow_favoriteLabel, cardShow__icon, cardShow__iconContainer } = props.classes;
	if (isFavorite) {
		return (
			<div className={cardShow__iconContainer} onClick={removeFavorite}>
				<FontAwesomeIcon icon={faStarSolid} className={cardShow__icon} />
				<span className={cardShow_favoriteLabel}>Remover dos favoritos</span>
			</div>
		);
	}
	return (
		<div className={cardShow__iconContainer} onClick={addFavorite}>
			<FontAwesomeIcon icon={faStarRegular} className={cardShow__icon} />
			<span className={cardShow_favoriteLabel}>Adicionar aos favoritos</span>
		</div>
	);
};

FavoriteButton.propTypes = {
	addFavorite: PropTypes.func.isRequired,
	isFavorite: PropTypes.bool.isRequired,
	removeFavorite: PropTypes.func.isRequired
};

const styles = {
	cardShow__iconContainer: {
		alignItems: 'center',
		backgroundColor: 'rgba(12, 12, 12, 0.6)',
		borderRadius: '3px',
		color: '#f5f5f5',
		cursor: 'pointer',
		height: '20px',
		justifyContent: 'space-around',
		overflow: 'hidden',
		padding: '5px',
		position: 'absolute',
		right: '10px',
		transition: 'width .3s',
		top: '10px',
		zIndex: 1,
		width: '20px',
		'&:hover': {
			backgroundColor: 'rgba(12, 12, 12, 0.7)',
			width: '155px',
		},
		'&:hover $cardShow_favoriteLabel': {
			opacity: '1',
			visibility: 'visible'
		},
		'&:hover $cardShow__icon': {
			color: '#fffa00'
		}
	},
	cardShow__icon: {
		color: '#fffa13',
		margin: '1px 2px',
	},
	cardShow_favoriteLabel: {
		float: 'right',
		fontSize: '10px', 
		opacity: 0,
		position: 'absolute',
		textTransform: 'uppercase',
		top: '7px',
		transition: 'opacity 1.5s',
		visibility: 'hidden'
	},
};

export default injectSheet(styles)(FavoriteButton);
