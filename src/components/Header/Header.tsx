import {Button} from 'components/Button/Button';
import {useLocation} from 'react-router-dom';
import {cn} from 'utils/classname';

import './Header.scss';

const block = cn('header');

interface HeaderProps {}

export function Header(_props: HeaderProps) {
    const location = useLocation();
    const showMain = location.pathname !== '/' && location.pathname !== '/posts';
    return (
        <div className={block()}>
            {showMain && (
                <Button className={block('btn')} href="/">
                    Home
                </Button>
            )}
            {!showMain && <Button href="/posts/new">Создать пост</Button>}
        </div>
    );
}
