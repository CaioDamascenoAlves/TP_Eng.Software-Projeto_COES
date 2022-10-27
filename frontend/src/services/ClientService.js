import Api from './Api';

export default {
  async createNewClient(client) {
    try {
      const response = await Api().post('/clients', client);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async getClients() {
    try {
      const response = await Api().get('/clients');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async getClientId(id) {
    try {
      const response = await Api().get(`/clients/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async updateClient(client) {
    try {
      const id = client.client_id;
      const response = await Api().put(`/clients/${id}`, client);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async deleteClient(id) {
    try {
      const response = await Api().delete(`/clients/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};
