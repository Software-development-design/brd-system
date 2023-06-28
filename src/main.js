import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import VueKinesis from 'vue-kinesis';
import App from './App.vue'
import router from './router'

import './assets/main.css';
import 'ant-design-vue/dist/antd.css';
import '../src/assets/magic.css';


const app = createApp(App)

app.use(router);
app.use(Antd);
app.use(VueKinesis);

app.mount('#app')
