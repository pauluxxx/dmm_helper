import "@babel/polyfill";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VueTransmit from "vue-transmit";
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
Vue.config.productionTip = false;
Vue.use(VueChartkick, {adapter: Chart})
Vue.use(VueTransmit);
const requireComponent = require.context(
    // Относительный путь до каталога компонентов
    './components',
    // Обрабатывать или нет подкаталоги
    true,
    // Регулярное выражение для определения файлов базовых компонентов
    /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    // Получение конфигурации компонента
    const componentConfig = requireComponent(fileName)

    // Получение имени компонента в PascalCase
    const componentName = upperFirst(
        camelCase(
            // Удаление из начала `./` и расширения из имени файла
            fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
        )
    )

    // Глобальная регистрация компонента
    Vue.component(
        componentName,
        // Поиск опций компонента в `.default`, который будет существовать,
        // если компонент экспортирован с помощью `export default`,
        // иначе будет использован корневой уровень модуля.
        componentConfig.default || componentConfig
    )
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
