import clsx from "clsx";
import React, { ForwardedRef, forwardRef, memo } from "react";

import styles from "./Button.module.scss";

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

interface ButtonProps extends React.ComponentProps<"button"> {}

const Component = (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { type = "button", disabled } = props;

    const buttonClassNames = clsx(styles.base, { [styles.disabled]: disabled });

    return (
        <button className={buttonClassNames} disabled={disabled} ref={ref} type={type}>
            button
        </button>
    );
};

export const Button = memo(forwardRef(Component));
