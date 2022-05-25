<template>
  <div id="app">
    <center>
      <table>
        <Header/>
          <NewsLists />
          <AddButton/>
        <Footer/>
      </table>
    </center>
  </div>
</template>

<script>
import NewsLists from './components/NewsList.vue'
import AddButton from './components/AddButton.vue'
import Footer from './layout/Footer.vue';
import Header from './layout/Header.vue';

export default {
  name: 'App',
  components: {
    NewsLists , 
    Footer , 
    Header, 
    AddButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

table {
    width: 800px;
  } 
</style>
