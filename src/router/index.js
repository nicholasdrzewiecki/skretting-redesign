import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home"
import News from "@/components/News"
import CalculatorGrowth from "@/components/CalculatorGrowth"
import OrderCreate from "@/components/OrderCreate"
import OrderHistory from "@/components/OrderHistory"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    }, {
      path: "/news",
      component: News
    }, {
      path: "/calculators/growth",
      component: CalculatorGrowth
    }, {
      path: "/order/create",
      component: OrderCreate
    }, {
      path: "/order/history",
      component: OrderHistory
    }
  ]
})
