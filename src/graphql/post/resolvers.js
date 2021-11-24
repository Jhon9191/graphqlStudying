import DataLoader from 'dataloader';
import fetch from 'node-fetch';

const userDataLoader = new DataLoader(async (ids) => {
    const urlQuery = ids.join('&id=');
    const url = 'http://localhost:3000/users/?id=' + urlQuery;
    const response = await fetch(url);
    const users = await response.json();
    return ids.map((id) => users.find((user) => user.id === id));
});

export const postResolvers = {
    Query: {
        post: async (_, { id }, { getPosts }) => {
            const response = await getPosts("/" + id);
            const post = await response.json();
            return post;
        },

        posts: async (_, { input }, { getPosts }) => {
            const ApiFiltersInput = new URLSearchParams(input)
            const response = await getPosts("/?" + ApiFiltersInput);
            const posts = await response.json();
            return posts;
        }
    },
    Post:{ 
        user:  async ({userId}, _, {getUsers}) => {
            return userDataLoader.load(userId);
    }}
}