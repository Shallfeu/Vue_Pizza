import { createApp } from 'vue';
// Components
import App from '@/App';
// Utils
import router from '@/router';
import store from '@/store';
// Styles
import '@/assets/tailwind.css';

const app = createApp(App);

app.use(store).use(router);

app.mount('#app');
