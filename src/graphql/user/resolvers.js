const posts = ({ id }, _, { dataSources }) => {
    return dataSources.postApi.batchLoadByUserId(id);
};

export const userResolvers = {
    
    Query: {
        user: async (_,{ id },{ getUsers }) => {
            const response = await getUsers("/" + id);
            const user = await response.json();
            return user;
        },

        users: async (_,{ input },{ getUsers }) => {
            const ApiFiltersInput = new URLSearchParams(input)
            const response = await getUsers("/?"+ ApiFiltersInput);
            const users = await response.json();
            return users;
        },

    },
    User: {posts}
}

