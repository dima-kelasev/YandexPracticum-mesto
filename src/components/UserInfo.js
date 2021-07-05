export class UserInfo {
  constructor(nameSelector, subSelector, avatar) {
    this._userName = document.querySelector(nameSelector);
    this._aboutInfo = document.querySelector(subSelector);
    this._avatar = document.querySelector(avatar);
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._aboutInfo.textContent = data.about;
    this._avatar.src = data.avatar
  }

  getUserInfo() {
   return {
     name: this._userName.textContent,
     about: this._aboutInfo.textContent
   }
  }

  setUserAva(data) {
    this._avatar.src = data.avatar
  }
}