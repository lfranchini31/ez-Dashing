import Logger from 'utils/Logger';

const logger = Logger.getLogger("AvatarConfig");

export default class AvatarConfig {
  static get = (name, avatars) => {
    let resultAvatar;
    if (avatars != null) {
      try {
        for (let avatar of avatars) {
          if (new RegExp(avatar.jenkinsAuthorPattern).test(name)) {
            resultAvatar = avatar;
            break;
          }
        }
      } catch(ex) {
        logger.error("Invalid avatar configuration pattern, details : ", ex);
      }
    }
    if (resultAvatar == null) {
      resultAvatar = {
        displayName: name,
        url: "img/avatars/anonymous.png"
      }
    }
    return resultAvatar;
  };

}
