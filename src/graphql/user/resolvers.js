import fetch from 'node-fetch';
export const userResolvers = {
    
    Query: {
        user: async (_,{ id },{ getUsers }) => {
            const response = await getUsers("/" + id);
            const user = await response.json();
            return user;
        },

        users: async (_,__,{ getUsers }) => {
            const users = await getUsers();
            return users.json();
        },

    },
}

