import clsx from 'clsx';
import {
	ComponentProps, ForwardedRef, forwardRef, memo 
} from 'react';

import styles from './Button.module.scss';

// autofocus - autofocus - Specifies that a button should automatically get focus when the page loads
// disabled	- disabled - Specifies that a button should be disabled
// form	- form_id - Specifies which form the button belongs to
// formaction - URL	- Specifies where to send the form-data when a form is submitted. Only for type="submit"
// formenctype - application/x-www-form-urlencoded / multipart/form-data / text/plain - Specifies how form-data should be encoded before sending it to a server. Only for type="submit"
// formmethod - get / post - Specifies how to send the form-data (which HTTP method to use). Only for type="submit"
// formnovalidate - formnovalidate - Specifies that the form-data should not be validated on submission. Only for type="submit"
// formtarget - _blank / _self / _parent / _top / framename - Specifies where to display the response after submitting the form. Only for type="submit"
// name - name - Specifies a name for the button
// type - button reset submit - Specifies the type of button
// value - text - Specifies an initial value for the button

type ButtonProps = ComponentProps<'button'> & { label: string };

function Component(props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
	const {
		type = 'button', 
		disabled, 
		label, 
		onClick 
	} = props;

	const buttonClassNames = clsx(styles.base, {
		[styles.disabled]: disabled,
	});

	return (
		<button
			onClick={onClick}
			className={buttonClassNames}
			disabled={disabled}
			ref={ref}
			type={type || 'button'}
		>
			{label}
		</button>
	);
}

export const Button = memo(forwardRef(Component));
