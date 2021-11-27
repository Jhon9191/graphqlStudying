const user = async ({ userId }, _, { userDataLoader }) => {
    return userDataLoader.load(userId);
};

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
    Post:{user}
}