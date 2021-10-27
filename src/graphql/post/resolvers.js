export const postResolvers = {
    Query: {
        post: () => {
            return {
                id: "sdsdasdasda2",
                title: "Sexo"
            }
        },

        posts: () => {
            return [
                {
                    id: "sdsdasdasda2",
                    title: "Sexo"
                },
                {
                    id: "dsfsadasd",
                    title: "Sexo" 
                },
                {
                    id: "sdsdasddsasdsdsda2",
                    title: "Sexo" 
                }
            ]
        },

    },
}

