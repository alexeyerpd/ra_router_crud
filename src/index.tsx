import * as React from 'react';
import {App} from 'containers/App/App';
import * as dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {getRootContainer} from 'utils/helpers';

import './styles/root.scss';

dayjs.extend(utc);
dayjs.extend(timezone);

const root = createRoot(getRootContainer());

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
