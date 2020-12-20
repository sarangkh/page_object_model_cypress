export const selectors = {
  'LAUNCH': {
    'LOGIN_LINK': 'li[class="site__login"] a[role="link"]',
    'LOGIN_EMAIL_INPUT': 'form[class="form modal__form"] input[name="email"]',
    'LOGIN_PASSWORD_INPUT': 'form[class="form modal__form"] input[name="password"]',
    'LOGIN_BUTTON': 'button[title="Log in"]',
  },
  'PROFILES': {
    'DEFAULT_PROFILE_LINK': '.profile__icon--remote',
  },
  'HOME': {
    'SEARCH_ICON': 'form[class="search search--main"] i[class="icon icon__search"]',
    'SEARCH_INPUT': 'form[class="search search--main search--active"] input[class="search__input"]',
    'PLAY_ICON': 'a[title="Play"]',
    'CURRENT_VIDEO_TIME': '.vjs-current-time-display  >.vjs-control-text',
  },
  'WATCH': {
    'TRAILER_IMG': 'img[class="lazyautosizes lazyloaded"]',
  }
}