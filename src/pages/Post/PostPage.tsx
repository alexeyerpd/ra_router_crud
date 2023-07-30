import * as React from 'react';
import {Header} from 'components/Header/Header';
import {useParams} from 'react-router-dom';
import {cn} from 'utils/classname';
import {Frontend, frontend} from 'utils/frontend';

import './PostPage.scss';

const block = cn('post-page');

export function PostPage() {
    const [post, setPost] = React.useState<Frontend.Post | null>(null);
    const params = useParams();

    const getPost = async () => {
        const data = await frontend.getPost<{post: Frontend.Post}>(Number(params.id));

        setPost(data.post);
    };

    React.useEffect(() => {
        getPost();
    }, []);

    if (!post) {
        return null;
    }

    return (
        <div className={block()}>
            <Header />
            <div className={block('post')}>{post.content}</div>
        </div>
    );
}
