import React from 'react';
import './CustomButton.css'; // Optional if using plain CSS

const CustomButton = ({
	children,
	onClick,
	type = 'button',
	variant = 'primary',
	size = 'medium',
	disabled = false,
	className = '',
	...props
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`btn ${variant} ${size} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default CustomButton;
