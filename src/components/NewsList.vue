<template>
  <div>
    <table v-for="(item , index) in newsList" :key="item.id + index" class="subtable">
      <tr>
        <td>{{  rowNum + index}}. {{item.title}} <span class="subtr">{{ item.domain}} </span></td>
      </tr>
      <tr class="subtr">
          <td>{{item.points}} points |  by {{item.user}} | {{item.comments_count}} comments</td>
      </tr>
    </table>

  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  created() {
    document.title = '뉴스정보';
    this.setPageNum(1)
    this.fetchNewsList({ newsType : this.newsType , pageNum: this.pageNum} )
  },
  computed: {
    ...mapState(['newsList', 'pageNum' , 'newsType'] ),
    rowNum(){
      return  (this.pageNum-1)*10+  1;
    }
  },
  methods: {
    ...mapActions(['fetchNewsList']),
    ...mapMutations(['setPageNum'])
  }
}
</script>

<style >
.subtable {
  text-align: left;
  font-size: small;
  padding: 5px 0;
}

 .subtr {
   font-size: smaller;
   color: darkgray;
 }
</style>