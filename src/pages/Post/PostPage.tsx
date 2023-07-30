import * as React from 'react';
import {Button} from 'components/Button/Button';
import {Header} from 'components/Header/Header';
import {useParams, useSearchParams} from 'react-router-dom';
import {cn} from 'utils/classname';
import {Frontend, frontend} from 'utils/frontend';

import './PostPage.scss';

const block = cn('post-page');

export function PostPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [post, setPost] = React.useState<Frontend.Post | null>(null);
    const [updatedContent, setUpdatedContent] = React.useState('');
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

    const isEdit = searchParams.get('edit') === 'true';
    const buttonText = isEdit ? 'Cancel' : 'Edit';
    const handleEditClick = () => {
        setSearchParams(isEdit ? {} : {edit: 'true'});
        if (isEdit) {
            setUpdatedContent(post.content);
        }
    };

    const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (updatedContent) {
            frontend.createPost({id: post.id, content: updatedContent}).then(() => {
                getPost();
                setSearchParams({});
            });
        }
    };

    return (
        <div className={block()}>
            <Header />

            <div className={block('post')}>
                <div className={block('actions')}>
                    <Button type="button" view="outline" onClick={handleEditClick}>
                        {buttonText}
                    </Button>
                </div>
                {isEdit ? (
                    <form onSubmit={handleUpdate} className={block('form')}>
                        <input
                            className={block('input')}
                            type="text"
                            value={updatedContent || post.content}
                            onChange={(e) => setUpdatedContent(e.target.value)}
                        />
                        <Button className={block('btn')}>Сохранить</Button>
                    </form>
                ) : (
                    <div>{post.content}</div>
                )}
            </div>
        </div>
    );
}
