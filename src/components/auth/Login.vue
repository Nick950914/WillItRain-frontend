<template>
  <div id="login">
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="username">Username</label>
          <input
                  type="text"
                  id="username"
                  v-model="login">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div class="submit">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
    data () {
        return {
            login: '',
            password: ''
        }
    },
    methods: {
        onSubmit () {
            const formData = {
                login: this.login,
                password: this.password,
            };
            console.log(formData);
            this.$store.dispatch('auth/login', formData);
            // axios.post('http://0.0.0.0:4567/api/loging', formData)
            //     .then(res => console.log(res))
            //     .catch(error => console.log(error))
        }
    }
}
</script>

<style scoped>

  #login {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 91vh;
  }

  .signin-form {
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

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #17a2b8;
    background-color: #eee;
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
