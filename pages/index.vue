<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  layout: "default",
});
const checkbox = ref(false);
const valid = ref(true);
const show1 = ref(false);
const password = ref("");
const email = ref("");
const passwordRules = ref([
  (v: string) => !!v || "Password is required",
  (v: string) =>
    (v && v.length <= 10) || "Password must be less than 10 characters",
]);
const emailRules = ref([
  (v: string) => !!v || "E-mail is required",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
]);
</script>

<template>
  <v-container id="login" class="fill-height justify-center" tag="section">
    <v-row justify="center" class="h-100vh" align="center">
      <v-col lg="11" sm="8" xl="7">
        <v-card elevation="10">
          <v-row>
            <v-col
              lg="7"
              class="bg-primary d-none d-md-flex align-center justify-center"
            >
              <div class="d-none d-sm-block">
                <div class="d-flex align-center pa-10 v-col-8">
                  <div>
                    <h2 class="text-h4 text-white font-weight-medium">
                      Welcome Back🙂
                    </h2>
                    <h6
                      class="text-subtitle-1 text-high-emphasis mt-4 text-white font-weight-regular"
                    >
                      To keep connected with us please log in with your personal information
                    </h6>
                    <v-btn
                      class="mt-6 text-capitalize"
                      size="x-large"
                      variant="outlined"
                      color="white"
                      >Learn More</v-btn
                    >
                  </div>
                </div>
              </div>
            </v-col>
            <v-col lg="5">
              <div class="pa-7 pa-sm-12">
                <img src="@/assets/images/logos/dark-logo-icon.svg" />
                <h2 class="font-weight-bold mt-4 text--darken-2">Sign in</h2>
                <h6 class="text-subtitle-1 mb-7">
                  Don't have an account?
                  <v-btn to="/signup" variant="plain"
                    >Sign Up</v-btn
                  >
                </h6>

                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  action="/"
                >
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    class="mt-4"
                    required
                    variant="outlined"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :counter="10"
                    :rules="passwordRules"
                    label="Password"
                    required
                    variant="outlined"
                    type="password"
                  ></v-text-field>

                  <div class="d-block d-sm-flex align-center mb-4 mb-sm-0">
                    <v-checkbox
                      v-model="checkbox"
                      :rules="[(v) => !!v || 'You must agree to continue!']"
                      label="Remember me?"
                      required
                      hide-details
                    ></v-checkbox>
                    <div class="ml-auto">
                      <a
                        href="javascript:void(0)"
                        class="text-primary text-decoration-none"
                        >Forgot password?</a
                      >
                    </div>
                  </div>
                  <v-btn color="primary" to="/dashboard" block class="py-6" submit
                    >Sign In</v-btn
                  >
                </v-form>
                <div class="text-center mt-6">
                  <div class="d-flex align-center justify-center gap-2">
                    <v-btn icon color="primary">
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn icon color="error">
                      <v-icon>mdi-github</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
