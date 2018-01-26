import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import zh from './zh'
import us from './us'
import jianti from './jianti'

const i18n = new VueI18n({
    locale: 'us', 
    messages: {
      zh: zh,
      us: us,
      jianti:jianti
  }
  })
export default i18n
