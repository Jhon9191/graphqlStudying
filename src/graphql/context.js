import fetch from 'node-fetch';
import { getPosts } from './post/utils';
import { makeUserDataLoader } from './user/dataloaders';
import { getUsers } from './user/utils';

const API_URL = process.env.API_URL;

export const context = () => {
    return {
        userDataLoader: makeUserDataLoader(getUsers(fetch)),
        getUsers: getUsers(fetch),
        getPosts: getPosts(fetch),
    };
}