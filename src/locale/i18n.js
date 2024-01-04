import { createI18n } from 'vue-i18n'
import pt_BR from '@/locale/pt_BR.json'
import EN from '@/locale/en.json'

const i18n = createI18n({
    locale: 'pt_BR',
    messages: {
        pt_BR: pt_BR,
        EN: EN
    }
})

export default i18n;