import { RESTDataSource } from 'apollo-datasource-rest';
import { makePostDataLoader } from './datalaoders';
export class PostsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL + '/posts/';
    this.dataLoaders = makePostDataLoader(this.getPosts.bind(this));
  }

  async getPosts(urlParams = {}) {
    return this.get('', urlParams, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getPost(id) {
    return this.get(id, undefined, {
      cacheOptions: { ttl: 60 },
    });
  }

  batchLoadByUserId(id){
    return this.dataLoaders.load(id);
  }

}