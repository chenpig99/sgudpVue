<template>
  <div id="app">
    <Head v-show="$route.meta.view"></Head>
    <Nav v-show="$route.meta.show"></Nav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Head from "./components/Head";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Head,
    Nav,
    Footer,
  },
};
</script>
