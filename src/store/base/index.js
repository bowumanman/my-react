import { observable, action } from 'mobx';
class Base {
    @observable user = {
        token: null
    };
    @action
    updateToken = () => {
        const localData = localStorage.getItem('REACT_DATA');
        if (localData) {
            this.user = JSON.parse(localData);
        }
    }
    @action 
    getToken = () => {
        return this.user.token;
    }
    @action 
    setBaseUser = (user) => {
        this.user = user;
    }
    @action
    changeUserName = (name) => {
        this.userName = name;
    }
}
const BaseStore = new Base();
export default BaseStore;
