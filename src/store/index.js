import { createStore } from 'vuex';
// Modules
import pizzaModule from '@/store/modules/pizzaModule';

export default createStore({
  modules: { pizza: pizzaModule },
});
