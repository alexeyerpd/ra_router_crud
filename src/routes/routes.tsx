import {CreatePost} from 'components/CreatePost/CreatePost';
import {Route, Routes} from 'react-router-dom';
import {PostPage} from 'ui/pages/Post/PostPage';
import {PostsPage} from 'ui/pages/Posts/PostsPage';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<PostsPage />} />
                <Route path="posts">
                    <Route index element={<PostsPage />} />
                    <Route path=":id" element={<PostPage />} />
                    <Route path="new" element={<CreatePost />} />
                </Route>
            </Route>
        </Routes>
    );
}
