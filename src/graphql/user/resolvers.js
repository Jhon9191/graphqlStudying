import fetch from 'node-fetch';
export const userResolvers = {
    
    Query: {
        user: async () => {
            return {
                id: "sdsdasdasda2",
                userName: "João Antônio"
            }
        },

        users: async (_,__,{ hello }) => {
            console.log(hello);
            const users = await fetch("http://localhost:3000/users")
            return users.json();
        },

    },
}

