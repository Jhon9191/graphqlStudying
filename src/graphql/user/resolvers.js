import fetch from 'node-fetch';
export const userResolvers = {
    
    Query: {
        user: async (_,{ id },{ hello }) => {
            const response = await fetch("http://localhost:3000/users/" + id);
            const user = await response.json();
            //console.log(res);
            return user;
        },

        users: async (_,__,{ hello }) => {
            const users = await fetch("http://localhost:3000/users")
            return users.json();
        },

    },
}

