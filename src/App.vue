<template>
  <div id="app" class="container container-fluid">
    <img width="25%" src="./assets/logo.png">
    <div class="row">
    <div class="col-md-6" ><v-input placeholder="Search..."/></div>
    <div class="col-md-6" ><v-input placeholder="test"/></div>
  
  <vue-panel title="Panel1">
  <v-input placeholder="Username"/>
  </vue-panel>
  
<vue-panel title="Panel2">
<v-input aria-placeholder="Password" />
</vue-panel>

    </div>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
