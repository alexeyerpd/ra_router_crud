import {AppRoutes} from 'ui/routes/routes';
import {cn} from 'utils/classname';

import '../../styles/root.scss';
import './App.scss';

const block = cn('app');

export function App() {
    return (
        <div className={block()}>
            <AppRoutes />
        </div>
    );
}
