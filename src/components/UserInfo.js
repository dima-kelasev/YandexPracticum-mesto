export class UserInfo {
  constructor(name, about) {
    this._UserName = name;
    this._aboutInfo = about;
  }

  setUserInfo(data) {
    this._UserName.value = data.name;
    this._aboutInfo.value = data.link;
  }

  getUserInfo() {
    const currentUser = {};
    currentUser.name = this._UserName;
    currentUser.link = this._aboutInfo;
    return currentUser;
  }
}