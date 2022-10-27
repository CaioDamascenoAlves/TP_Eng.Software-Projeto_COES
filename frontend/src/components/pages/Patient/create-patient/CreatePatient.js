import { required } from 'vuelidate/lib/validators';
import PatientService from '@/services/PatientService';

export default {
  name: 'CreatePatientComponent',
  data() {
    return {
      patientForm: {
        name: null,
		cpf: null,
		adress: null,
        age: null,
        
      },
      isSubmitted: false,
    };
  },
  validations: {
    patientForm: {
      name: { required },
      cpf: { required },
      adress: { required },
      age: { required },
    },
  },
  methods: {
    handleSubmitForm() {},

    async submitNewPatient() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.$swal('Oops!', 'You need to include all the required fields', 'error');
          return;
        }

        await PatientService.createNewPatient(this.patientForm);
        this.$swal({
          title: 'Paciênte adicionado com sucesso!',
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
      } catch (error) {
        console.log(error);
      }
    },
  },
};
