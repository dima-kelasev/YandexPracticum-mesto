export class UserInfo {
  constructor(name, about) {
    this._UserName = name;
    this._aboutInfo = about;
  }

  setUserInfo(data) {
    this._UserName.textContent = data.name;
    this._aboutInfo.textContent = data.link;
  }

  getUserInfo() {
   return {
     name: this._UserName.textContent,
     about: this._aboutInfo.textContent}
  }
}