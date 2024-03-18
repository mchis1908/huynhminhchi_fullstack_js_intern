import { Options, Vue } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";

@Options({
  components: {
  },
  props:{
    productItem: Object,
  },
  watch:{
    cartItems: {
        handler(val, oldVal) {
          this.isAdd = this.checkIsAdd();
        },
        deep: true,
    },
  }
})
export default class ProductItem extends Vue {
    public unsubscribe!: any;
    public productItem!: any;
    public isAdd: boolean= false;
    public cartItems: any= [];

    public beforeMount() {
        this.cartItems = this.$store.state.cartItems
    }

    public async mounted() {
        this.handleSubscribe()
    }

    public unmounted() {
        this.unsubscribe()
    }

    public handleSubscribe() {
        this.unsubscribe = this.$store.subscribe(async (mutation: any, state: any) => {
            if (mutation.type === 'setCartItems') {
                this.cartItems= mutation.payload;
            }
        })
    }

    public handleAddToCard(){
        const productWithQuantity = { ...this.productItem, quantity: 1 };
        this.cartItems.push(productWithQuantity);
        this.$store.commit("setCartItems", this.cartItems);
    }

    public checkIsAdd(){
        return this.cartItems.some((item:any) => item.id === this.productItem.id);
    }
}
