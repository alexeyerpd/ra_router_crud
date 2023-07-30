import {Link} from 'react-router-dom';
import {cn} from 'utils/classname';
import {ClassNameProps} from 'utils/types';

import './Button.scss';

const block = cn('button');

interface ButtonProps extends ClassNameProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    view?: 'normal' | 'clear' | 'danger' | 'outline';
}

export function Button({children, className, view = 'normal', href, ...buttonProps}: ButtonProps) {
    if (href) {
        return (
            <Link to={href} className={block({view}, [block('link'), className])}>
                {children}
            </Link>
        );
    }
    return (
        <button className={block({view}, className)} {...buttonProps}>
            {children}
        </button>
    );
}
