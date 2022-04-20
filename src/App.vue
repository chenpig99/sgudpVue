<template>
  <div id="app">
    <Header></Header>
    <Head v-show="$route.meta.view"></Head>
    <Nav v-show="$route.meta.show"></Nav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Head from "./components/Head";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Head,
    Nav,
    Footer,
  },
};
</script>
