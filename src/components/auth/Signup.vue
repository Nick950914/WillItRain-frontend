<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input" :class="{invalid: $v.login.$error}">
          <label for="username">Username</label>
          <input
                  type="text"
                  id="username"
                  @blur="$v.login.$touch()"
                  v-model="login">
          <p v-if="!$v.login.required">Please provide a valid username.</p>
<!--          <p v-if="!$v.login.minLength">Username needs to be at least {{$v.login.$params.minLength.min}} symbols long.</p>-->
<!--          <p v-if="!$v.login.maxLength">Username cannot to be longer than {{$v.login.$params.maxLength.max}} symbols.</p>-->
        </div>
        <div class="input" :class="{invalid: $v.password.$error}">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  @blur="$v.password.$touch()"
                  v-model="password">
          <p v-if="!$v.password.required">Please provide a valid password.</p>
          <p v-if="!$v.password.minLength">Password needs to be at least {{$v.password.$params.minLength.min}} symbols long.</p>
        </div>
        <div class="input" :class="{invalid: $v.confirmPassword.$error}">
          <label for="confirm-password">Confirm Password</label>
          <input
                  type="password"
                  id="confirm-password"
                  @blur="$v.confirmPassword.$touch()"
                  v-model="confirmPassword">
        </div>
<!--        <div class="input">-->
<!--          <label for="country">Country</label>-->
<!--          <select id="country" v-model="country">-->
<!--            <option value="usa">USA</option>-->
<!--            <option value="india">India</option>-->
<!--            <option value="uk">UK</option>-->
<!--            <option value="germany">Germany</option>-->
<!--          </select>-->
<!--        </div>-->
<!--        <div class="input inline">-->
<!--          <input type="checkbox" id="terms" v-model="terms">-->
<!--          <label for="terms">Accept Terms of Use</label>-->
<!--        </div>-->
        <div class="submit">
          <button type="submit" :disabled="$v.$invalid">Sign up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'

export default {
    data () {
        return {
            login: '',
            // age: null,
            password: '',
            confirmPassword: ''
        }
    },
    validations: {
        login: {
            required,
            // minLength: minLength(6),
            // maxLength: maxLength(12)
        },
        password: {
            required,
            minLength: minLength(6)
        },
        confirmPassword: {
            sameAs: sameAs('password')
        }
    },
    methods: {
        onSubmit () {
            const formData = {
                login: this.login,
                password: this.password,
                // confirmPassword: this.confirmPassword,
            }
            console.log(formData)
            this.$store.dispatch('auth/register', formData);
            // axios.post('http://0.0.0.0:4567/api/register', formData)
            //     .then(res => console.log(res))
            //     .catch(error => console.log(error))
        }
    }

}
</script>

<style scoped>

  #signup {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 91vh;
  }

  .signup-form {
    width: 400px;
    margin: 30px auto;
    border: 3px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #17a2b8;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .input.invalid input {
    border: 1px solid red;
    background-color: #ffc9aa;
  }

  .input.invalid label {
    color: red;
  }

  .submit button {
    border: 1px solid #17a2b8;
    color: #17a2b8;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #17a2b8;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }


</style>
