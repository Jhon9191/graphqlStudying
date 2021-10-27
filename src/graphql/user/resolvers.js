export const userResolvers = {
    Query: {
        user: () => {
            return {
                id: "sdsdasdasda2",
                userName: "João Antônio"
            }
        },

        users: () => {
            return [
                {
                    id: "sdsdasdasda2",
                    userName: "João Antônio1"
                },
                {
                    id: "dsfsadasd",
                    userName: "João Antônio2"
                },
                {
                    id: "sdsdasddsasdsdsda2",
                    userName: "João Antônio3"
                }
            ]
        },

    },
}

