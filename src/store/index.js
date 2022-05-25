import Vuex from 'vuex'
import Vue from 'vue'

import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pageNum: 1,
    newsType: 'news',
    newsList : [
      {"id":31495049,"title":"YouTubeDrive: Store files as YouTube videos","points":467,"user":"notamy","time":1653413519,"time_ago":"8 hours ago","comments_count":229,"type":"link","url":"https://github.com/dzhang314/YouTubeDrive","domain":"github.com"},
      {"id":31495836,"title":"Bugs are evolving to eat plastic, study finds","points":243,"user":"achenet","time":1653417074,"time_ago":"7 hours ago","comments_count":191,"type":"link","url":"https://e360.yale.edu/digest/bugs-are-evolving-to-eat-plastic-study-finds","domain":"e360.yale.edu"},
      
    ]
  },
  mutations: {
    setNewsList (state , list) {
      state.newsList = list;
    },
    setPageNum (state , val) {
      state.pageNum = val;
    },
    setNewsType(state, val){
      state.newsType = val;
    }
  },
  actions: {
    fetchNewsList ( context , {newsType , pageNum} ) {
      axios.get(`http://localhost:8080/json1/news/${newsType}/${pageNum}`)
      .then(res => {
        context.commit('setNewsList' , res.data)
        context.commit('setPageNum', pageNum)
        context.commit('setNewsType', newsType)
      }).catch(err => console.log(err))


    }
  }
})

export default store;