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
  public isMobile: any = false;
  public unsubscribe!: any;
  
  public async beforeMounted(){
    this.isMobile= window.innerWidth > 767 ? false : true;
  }

  public async mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  public handleResize() {
    this.isMobile = window.innerWidth > 767 ? false : true;
  }
  
}
