<template>
<div class="container">
  <div class="phone">

    <div class="phone-head">
      <i class="ion-navicon-round pointer" @click="toggleSidebar"></i>
    </div>

    <div class="phone-body">
      <div :class="{ sidebar: active, open: sidebar }">
        <ul>
          <li>
            <h4>Skretting logo</h4>
          </li>
          <li>
            <i class="ion-android-arrow-dropright"></i>
            <router-link @click.native="toggleSidebar" to="/">Home</router-link>
          </li>
          <li>
            <i class="ion-android-arrow-dropright"></i>
            <router-link @click.native="toggleSidebar" to="/news">News</router-link>
          </li>
          <!-- Calculator links -->
          <li>
            <i class="ion-android-arrow-dropright"></i>
            <a @click.native="toggleSidebar" @click="calculators = !calculators">Calculators</a>
            <ul v-show="calculators">
              <li>
                <i class="ion-android-arrow-dropright"></i>
                <router-link @click.native="toggleSidebar" to="/calculators/growth">Growth</router-link>
              </li>
            </ul>
          </li>
          <!-- Order links -->
          <li>
            <i class="ion-android-arrow-dropright"></i>
            <a @click.native="toggleSidebar" @click="orders = !orders">Orders</a>
            <ul v-show="orders">
              <li>
                <i class="ion-android-arrow-dropright"></i>
                <router-link @click.native="toggleSidebar" to="/order/create">Create</router-link>
              </li>
              <li>
                <i class="ion-android-arrow-dropright"></i>
                <router-link @click.native="toggleSidebar" to="/order/history">History</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="screen" v-show="sidebar" @click="toggleSidebar"></div>
      <!-- Components render here -->
      <router-view></router-view>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      sidebar: false,
      calculators: false,
      orders: false,
    };
  },
  methods: {
    toggleSidebar() {
      if (this.sidebar === false) {
        this.sidebar = true;
      } else {
        this.sidebar = false;
      }
    },
  },
  filters: {
    capitalize(s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  }
}
</script>
