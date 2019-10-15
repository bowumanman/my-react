import { observable, action } from 'mobx';
class User {
    @observable userName = 'sai';
    @observable passWorld = 'hello world';

    @action
    changeUserName = (name) => {
        this.userName = name;
    }
}
const userStore = new User();
export default userStore;
