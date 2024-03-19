import { Options, Vue } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import CartItem from "./components/cart-item.vue";

@Options({
    components: {
        CartItem
    },
    watch:{
        cartItems: {
            handler(val, oldVal) {
                this.handleSummary();
            },
            deep: true,
        },
    }
})
export default class Product extends Vue {
    public unsubscribe!: any;
    public totalPrice: any=0;
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
                this.cartItems= mutation.payload
            }
        })
    }

    public increaseQuantity(id:any) {
        const index = this.cartItems.findIndex((item:any) => item?._id === id);

        if (index !== -1) {
            this.cartItems[index].quantity += 1;
            this.$store.commit("setCartItems", this.cartItems);
        }
    }

    public decreaseQuantity(id:any){
        const index = this.cartItems.findIndex((item:any) => item?._id === id);

        if (index !== -1) {
            this.cartItems[index].quantity -= 1;
            if (this.cartItems[index].quantity === 0) {
                this.cartItems.splice(index, 1);
            }
            this.$store.commit("setCartItems", this.cartItems);
        }
    }

    public deleteItem(id:any){
        const index = this.cartItems.findIndex((item:any) => item?._id === id);
        if (index !== -1) {
            this.cartItems.splice(index, 1);
            this.$store.commit("setCartItems", this.cartItems);
        }
    }

    public handleSummary(){
        this.totalPrice=0;
        for (const item of this.cartItems) {
            this.totalPrice += item.price * item.quantity;
        }
    }

    public roundMoney(amount:any) {
        const roundedAmount = amount.toFixed(2);
        return '$' + roundedAmount;
    }
}
