<template>
  <q-page>
    <q-spinner v-if="loading" color="primary" size="3em" />
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <q-list v-else bordered>
      <q-item
        clickable
        v-ripple
        v-for="post in posts.slice(0,10)"
        :key="post.data.id"
        @click="showImage(post.data.thumbnail)"
      >
        <q-item-section avatar>
          <q-avatar size="70px">
            <img :src="post.data.thumbnail">
          </q-avatar>
        </q-item-section>
        <q-item-section>{{post.data.title}}</q-item-section>
      </q-item>
    </q-list>
    <q-dialog full-width v-model="showImageDialog">
      <q-card>
        <q-card-section class="row items-center justify-between">
          <div class="text-h6">Image</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <q-img :src="imageUrl" spinner-color="blue" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Dotey',
  created () {
    // this.$axios.get('https://www.reddit.com/r/aww.json?raw_json=1')
    axios.get('http://61.132.57.82:8888/alloy/aww.jsp')
      .then(response => {
        this.loading = false
        this.posts = response.data.data.children
      })
      .catch(error => {
        console.log('Inside error, fetching product line items failed', error)
      })
  },
  data () {
    return {
      showImageDialog: false,
      imageUrl: '',
      loading: true,
      posts: []
    }
  },
  methods: {
    showImage (image) {
      this.showImageDialog = true
      this.imageUrl = image
    }
  }
}
</script>
