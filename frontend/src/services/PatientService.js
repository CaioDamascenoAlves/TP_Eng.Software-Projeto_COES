import Api from './Api';

export default {
  async createNewPatient(patient) {
    try {
      const response = await Api().post('/patients', patient);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async getPatients() {
    try {
      const response = await Api().get('/patients');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async getPatientId(id) {
    try {
      const response = await Api().get(`/patients/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async updatePatient(patient) {
    try {
      const id = patient.patient_id;
      const response = await Api().put(`/patients/${id}`, patient);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async deletePatient(id) {
    try {
      const response = await Api().delete(`/patients/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};
