export default class PostService{
    url='https://jsonplaceholder.typicode.com/posts'

    getPostById(id){
      return fetch(`${this.url}?userId=${id}`).then(value => value.json())
    }
}