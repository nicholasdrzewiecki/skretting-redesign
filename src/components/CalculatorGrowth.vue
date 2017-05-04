<template>
<div class="posts">
  <div class="post">
    <div class="post-head">
      <h4>Growth Calculator</h4>
    </div>
    <div class="post-body">
      <p>This calculator handles the relationship between initial weight, final weight, days, and standard growth rate. Any of the four parameters can be calculated from the other three.</p>
    </div>
  </div>
  <div class="post">
    <div class="post-head">
      <h4>Initial Weight</h4>
    </div>
    <div class="post-body">
      <form>
        <fieldset>
          <label>Final weight</label>
          <input class="input" type="number" v-model="finalWeight">
          <label>Number of days</label>
          <input class="input" type="number" v-model="numberDays">
          <label>Sustainable growth rate</label>
          <input class="input" type="number" v-model="growthDay">
        </fieldset>
      </form>
      <p>Result: {{resultInitialWeight}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      initialWeight: null,
      finalWeight: null,
      growthDay: null,
      numberDays: null
    }
  },
  computed: {
    resultInitialWeight() {
      return Math.round(this.finalWeight / Math.pow((1 + (this.growthDay / 100)), this.numberDays));
    },
    resultFinalWeight() {
      return Math.round(this.initialWeight * Math.pow((1 + (this.growthDay / 100)), this.numberDays));
    },
    resultNumberDays() {
      return Math.round((Math.log(this.finalWeight / this.initialWeight)) / (Math.log(1 + (this.growthDay / 100))));
    }
  }
}
</script>
