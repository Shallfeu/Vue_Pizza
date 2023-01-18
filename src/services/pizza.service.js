import httpService from '@/services/http.service';

const pizzaEndPoint = '/Pizzas';

const pizzaService = {
  get: async () => {
    const { data } = await httpService.get(pizzaEndPoint);
    return data;
  },
};

export default pizzaService;
