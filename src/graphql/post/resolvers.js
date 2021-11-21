export const postResolvers = {
    Query: {
        post: async (_,{ id },{ getPosts }) => {
            const response = await getPosts("/" + id);
            const post = await response.json();

            if (typeof post.id === 'undefined') {
              return {
                statusCode: 404,
                message: 'Post not found!',
              };
            }
            return post;
        },
        
        posts: async (_,{ input },{ getPosts }) => {
            const ApiFiltersInput = new URLSearchParams(input)
            const response = await getPosts("/?"+ ApiFiltersInput);
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
    },
    PostResult: {
        __resolveType: (obj) => {
          if (typeof obj.statusCode !== 'undefined') return 'PostNotFoundError';
          if (typeof obj.id !== 'undefined') return 'Post';
          return null;
        },
      },
}

