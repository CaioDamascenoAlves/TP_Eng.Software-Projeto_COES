import PatientService from '../../../../services/PatientService';

export default {
  name: 'EditPatientComponent',
  data() {
    return {
      patientForm: {
      },
    };
  },

  mounted() {
    this.getPatientById();
  },

  methods: {
    async getPatientById() {
      const { id } = this.$route.params;
      const response = await PatientService.getPatientId(id);

      this.patientForm = { ...response };
    },

    async updateFormPatient() {
      await PatientService.updatePatient(this.patientForm);
      this.$swal({
        title: 'Paciente editado com sucesso!',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
      }).then((data) => {
        this.$router.push({
          name: 'list',
        });
      });
    },
  },
};
