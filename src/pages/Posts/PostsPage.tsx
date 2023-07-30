import * as React from 'react';
import {Header} from 'components/Header/Header';
import {Posts} from 'components/Posts/Posts';
import {cn} from 'utils/classname';
import {Frontend, frontend} from 'utils/frontend';

import './PostsPage.scss';

const block = cn('posts-page');

export function PostsPage() {
    const [posts, setPosts] = React.useState<Frontend.Post[]>([]);

    const getPosts = async () => {
        const data = await frontend.getPosts<Frontend.Post[]>();
        setPosts(data);
    };

    React.useEffect(() => {
        getPosts();
    }, []);

    const removePost = async (id: number) => {
        await frontend.removePost(id);
        getPosts();
    };

    return (
        <div className={block()}>
            <Header />
            <Posts items={posts} onRemove={removePost} />
        </div>
    );
}
