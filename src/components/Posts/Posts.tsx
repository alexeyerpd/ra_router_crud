import {Post} from 'components/Post/Post';
import {cn} from 'utils/classname';
import {Frontend} from 'utils/frontend';

import './Posts.scss';

const block = cn('posts');

interface PostsProps {
    items: Frontend.Post[];
    onRemove: (id: number) => void;
}

export function Posts({items, onRemove}: PostsProps) {
    return (
        <div className={block()}>
            {items.map((post) => (
                <Post key={post.id} data={post} onRemove={onRemove} />
            ))}
        </div>
    );
}
