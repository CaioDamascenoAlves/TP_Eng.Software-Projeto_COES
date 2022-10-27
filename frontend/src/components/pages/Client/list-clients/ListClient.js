import ClientService from '../../../../services/ClientService';

export default {
  name: 'ListClientComponent',
  data() {
    return {
      clients: [],
    };
  },
  mounted() {
    this.listAllClients();
  },
  methods: {
    async listAllClients() {
      const response = await ClientService.getClients();
      this.clients = response;
    },

    async removeClient(id) {
      this.$swal({
        title: 'Tem certeza de que deseja excluir o Cliente?',
        text: 'Atenção! Este Cliente será excluído!',
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
          await ClientService.deleteClient(id);
          this.$swal('Deleted', 'Successfully deleted', 'success');
          this.listAllClientss();
        } else {
          this.$swal('Cancelled', 'Cancel deletion', 'info');
        }
      });
    },
  },
};
