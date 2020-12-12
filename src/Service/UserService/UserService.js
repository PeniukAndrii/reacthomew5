export default class UserService{
    ulr='https://jsonplaceholder.typicode.com/users'

    getUsers(){
        return fetch(this.ulr).then(value => value.json())
    }

    getUsersById(id){
        return fetch(`${this.ulr}/${id}`).then(value => value.json())
    }


}