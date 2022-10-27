import ClientService from '../../../../services/ClientService';

export default {
  name: 'EditClientComponent',
  data() {
    return {
      clientForm: {
      },
    };
  },

  mounted() {
    this.getClientById();
  },

  methods: {
    async getClientById() {
      const { id } = this.$route.params;
      const response = await ClientService.getClientId(id);

      this.clientForm = { ...response };
    },

    async updateFormClient() {
      // Chamada do service passando as propriedades por meio do 'clientForm' (funciona)
      await ClientService.updateClient(this.clientForm);
      this.$swal({
        title: 'Client updated successfully!',
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
