<template>
  <div>
    <button class="error"  @click="pageEvent('-')">이전페이지</button>
    | 
    <button class="success" @click="pageEvent('+')">다음페이지</button>

  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['setPageNum']),
    ...mapActions(['fetchNewsList']),
    pageEvent(type) {
      if(type === '-') {
        if(this.$store.state.pageNum  === 1) return; 
        this.setPageNum(this.$store.state.pageNum -1)
      }
      if(type === '+') this.setPageNum(this.$store.state.pageNum +1)
        this.fetchNewsList( { newsType : this.$store.state.newsType ,pageNum: this.$store.state.pageNum });
    }
  }
}
</script>

<style>
:root {
  --button-color: #ffffff;
  --button-bg-color: #0d6efd;
  --button-hover-bg-color: #025ce2;
}

button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  background: var(--button-bg-color);
  color: var(--button-color);
  
  margin: 1rem;
  padding: 0.5rem 1rem;
  
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  
  border: none;
  border-radius: 4px;
  
  display: inline-block;
  width: auto;
  
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  cursor: pointer;
  
  transition: 0.5s;
}

button.success {
  --button-bg-color: #28a745;
  --button-hover-bg-color: #218838;
}

button.error {
  --button-bg-color: #dc3545;
  --button-hover-bg-color: #c82333;
}

button.warning {
  --button-color: #212529;
  --button-bg-color: #ffc107;
  --button-hover-bg-color: #e0a800;
}

button:active,
button:hover,
button:focus {
  background: var(--button-hover-bg-color);
  outline: 0;
}
button:disabled {
  opacity: 0.5;
}


</style>