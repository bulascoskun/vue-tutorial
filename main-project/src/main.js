import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import BaseCard from './pages/ui/BaseCard.vue';
import BaseButton from './pages/ui/BaseButton.vue';
import BaseBadge from './pages/ui/BaseBadge.vue';
import BaseSpinner from './pages/ui/BaseSpinner.vue';
import BaseDialog from './pages/ui/BaseDialog.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');
