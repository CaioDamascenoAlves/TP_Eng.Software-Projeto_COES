import PatientService from '../../../../services/PatientService';

export default {
  name: 'ListPatientComponent',
  data() {
    return {
      patients: [],
    };
  },
  mounted() {
    this.listAllPatients();
  },
  methods: {
    async listAllPatients() {
      const response = await PatientService.getPatients();
      this.patients = response;
    },

    async removePatient(id) {
      this.$swal({
        title: 'Tem certeza de que deseja excluir o Paciente?',
        text: 'Atenção! Este paciente será excluído!',
        icon: 'warning',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim! Por favor, exclua!',
      }).then(async (result) => {
        if (result.value) {
          await PatientService.deletePatient(id);
          this.$swal('Excluído', 'Excluído com sucesso', 'success');
          this.listAllPatients();
        } else {
          this.$swal('Cancelado', 'Exclusão cancelada' , 'info');
        }
      });
    },
  },
};
