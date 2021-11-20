export const postResolvers = {
    Query: {
        post: async (_,{ id },{ getPosts }) => {
            const response = await getPosts("/" + id);
            return response.json();
        },

        posts: async (_,__,{ getPosts }) => {
            const response = await getPosts();
            const posts = await response.json();
            return posts;
        }
    },
    Post:{
        unixTimesTemp: ({ createdAt }) =>{
            const timestemp = new Date(createdAt).getTime()/1000;
            return Math.floor(timestemp);
             //returnconsole.log("Chamado", parent.id);
            //return Math.random();
        }
    }
}

