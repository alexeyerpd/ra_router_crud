import * as React from 'react';
import {Button} from 'components/Button/Button';
import {Header} from 'components/Header/Header';
import {useNavigate} from 'react-router-dom';
import {cn} from 'utils/classname';
import {frontend} from 'utils/frontend/frontend';
import {getStorageValue, setStorageValue} from 'utils/localStorage';

import './CreatePost.scss';

const block = cn('create-post');

export function CreatePost() {
    const [content, setContent] = React.useState(getStorageValue('content', ''));
    const navigate = useNavigate();

    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setContent(value);
        setStorageValue('content', value);
    };

    return (
        <div className={block()}>
            <Header />
            <form
                className={block('form')}
                onSubmit={(e) => {
                    e.preventDefault();
                    if (content) {
                        frontend.createPost<{id: number}>({content}).then((res) => {
                            setStorageValue('content', '');
                            navigate(`/posts/${res.id}`);
                        });
                    }
                }}
            >
                <div className={block('actions')}>
                    <Button type="button" view="outline" onClick={() => navigate('/')}>
                        X
                    </Button>
                </div>
                <input className={block('input')} value={content} onChange={handleContentChange} />
                <Button>Опубликовать</Button>
            </form>
        </div>
    );
}
