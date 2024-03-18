import { Options, Vue } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import Product from "@/components/product/product.vue";
import Cart from "@/components/cart/cart.vue";

@Options({
  components: {
    Product,
    Cart,
  },
})
export default class Home extends Vue {
  public isMobile: any = window.innerWidth > 767 ? false : true;
  public unsubscribe!: any;
  
  public async beforeMounted(){
    this.isMobile= window.innerWidth > 767 ? false : true;
  }

  public async mounted() {
    this.handleSubscribe()
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  public unmounted() {
    this.unsubscribe()
  }

  public handleSubscribe() {
    this.unsubscribe = this.$store.subscribe(async (mutation: any, state: any) => {
      if (mutation.type === 'setNotifications') {
      }
    })
  }

  public handleResize() {
    this.isMobile = window.innerWidth > 767 ? false : true;
  }
  
}
