<template>
  <div>
      <table>
        <tr>
          <td>
            <a href="#" @click="menuEvent('news')">
              <img src="/y18.gif" />
            </a>
          </td>
          <td>
            <a href="#" @click="menuEvent('news')">
              해커스뉴스
            </a>
          </td>
          <td>
            <a href="#" @click="menuEvent('news')">
              TOP
            </a>
          </td>
          <td>
            <a href="#" @click="menuEvent('newest')">
              NEW
            </a>
          </td>
          <td>
            <a href="#" @click="menuEvent('Show')">
              SHOW
            </a>
          </td>
          <td>
            <a href="#" @click="menuEvent('ask')">
              ASK
            </a>
          </td>
          <td>
            <a href="#" @click="menuEvent('jobs')">
              JOBS
            </a>
          </td>
        </tr>
      </table>

  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['pageNum', 'newsType' ])
  },

  methods: {
    ...mapMutations(['setNewsType' , 'setPageNum']),
    ...mapActions(['fetchNewsList']),
    menuEvent(val){
      this.setNewsType(val)
      this.setPageNum(1);
      this.fetchNewsList( { newsType: this.newsType  , pageNum: this.pageNum} )   
      
    }
  }
}
</script>

<style scoped>
  table {
    background-color: #ff6600;
    font-weight: bolder;
    color: #fff;
  } 

  td {
    min-width: 50px;
    max-width: 120px;
    border-right: #fff 1px solid;
    text-align: center;
  }

  td:last-child {
    border-right: none
  }

  td:first-child {
    width: 18px !important;
    min-width: 18px;
    padding-right: 4px;
    padding-top: 5px;
    border-right: none
  }

a:link, a:visited { 
  color:#ffffff; text-decoration: none; 
}
</style>>
