import fetch from 'node-fetch';
import { getPosts } from './post/utils';
import { makeUserDataLoader } from './user/dataloaders';
import { getUsers } from './user/utils';

const _getPosts = getPosts(fetch);
const _getUsers = getUsers(fetch);
export const context = () => {
    return {
        userDataLoader: makeUserDataLoader(_getUsers),
        getUsers: _getUsers,
        getPosts: _getPosts,
    };
}