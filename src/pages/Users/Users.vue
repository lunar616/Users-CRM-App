<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <table>
          <thead>
            <tr>
              <th @click="sort('name')">Name &#8595</th>
              <th @click="sort('age')">Age &#8595</th>
              <th @click="sort('gender')">Gender &#8595</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="user of usersSort" :key="user.id">
              <td>{{ user.name.first }}</td>
              <td>{{ user.dob.age }}</td>
              <td>{{ user.gender }}</td>
            </tr>
          </tbody>
        </table>
        <p>debug: sort: {{ currentSort }}, dir: {{ currentSortDir }}</p>
        <p>page: {{ page.current }}, length: {{ page.length + 1}}</p>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="button-list">
          <div class="btn btnPrimary" @click="prevPage"> &#8592 </div>
          <div class="btn btnPrimary" @click="nextPage"> &#8594 </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: [],
      currentSort: 'name',
      currentSortDir: 'asc',
      page: {
        current: 1,
        length: 3
      },
    };
  },
  created() {
    axios
      .get('https://randomuser.me/api/?results=10&&nat=us,es&inc=name,dob,gender&noinfo')
        .then(response => {
          this.users = response.data.results;
        })
        .catch(error => {
          console.log(error);
        });
  },
  computed: {
    usersSort() {
      return this.users.sort((a, b) => {
        let mod = 1;
        if (this.currentSortDir === 'desc') mod = -1;

        switch(this.currentSort) {
          case 'name': 
            a = a[this.currentSort].first;
            b = b[this.currentSort].first; 
            break;
          case 'age': 
            a = a.dob[this.currentSort]; 
            b = b.dob[this.currentSort]; 
            break;
          case 'gender': 
            a = a[this.currentSort]; 
            b = b[this.currentSort]; 
            break;
        };

        if (a < b) return -1 * mod;
        if (a > b) return 1 * mod;

        return 0;
      }).filter((row, index = 0) => {
        let start = (this.page.current - 1) * this.page.length;
        let end = this.page.current * this.page.length;

        if (index >= start && index < end) return true;
      });
    },
  },
  methods: {
    sort(event) {
      if (event === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      };

      this.currentSort = event;
    },
    prevPage() {
      if (this.page.current > 1) this.page.current-=1;
    },
    nextPage() {
      if (this.page.current * this.page.length < this.users.length) this.page.current+=1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Users.module.scss';
</style>