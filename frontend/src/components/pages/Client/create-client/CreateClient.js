import { required } from 'vuelidate/lib/validators';
import ClientService from '@/services/ClientService';

export default {
  name: 'CreateClientComponent',
  data() {
    return {
      clientForm: {
        name: null,
        adress: null,
        cpf_cnpj: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    clientForm: {
      name: { required },
      adress: { required },
      cpf_cnpj: { required },
    },
  },
  methods: {
    handleSubmitForm() {},

    async submitNewClient() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.$swal('Oops!', 'You need to include all the required fields', 'error');
          return;
        }

        await ClientService.createNewClient(this.clientForm);
        this.$swal({
          title: 'Client added successfully!',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        }).then((data) => {
          this.$router.push({
            name: 'create',
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
