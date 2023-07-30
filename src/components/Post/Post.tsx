import {Button} from 'components/Button/Button';
import {Link} from 'react-router-dom';
import {cn} from 'utils/classname';
import {Frontend} from 'utils/frontend';

import './Post.scss';

const block = cn('post');

interface PostProps {
    data: Frontend.Post;
    onRemove: (id: number) => void;
}

export function Post({data, onRemove}: PostProps) {
    return (
        <div className={block()}>
            <Link className={block('link')} to={`/posts/${data.id}`}>
                <div>{data.content}</div>
            </Link>

            <Button
                type="button"
                view="danger"
                className={block('btn-remove')}
                onClick={() => onRemove(data.id)}
            >
                X
            </Button>
        </div>
    );
}
