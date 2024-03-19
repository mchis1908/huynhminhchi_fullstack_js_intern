import { Options, Vue } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";

@Options({
    components: {
    },
    props:{
        cartItem: Object,
    },
    emits: ['increaseQuantity', 'decreaseQuantity', 'deleteItem']
})
export default class CartItem extends Vue {
    public unsubscribe!: any;
    public cartItem!: any;

    public increaseQuantity() {
        this.$emit('increaseQuantity', this.cartItem?._id)
    }

    public decreaseQuantity(){
        this.$emit('decreaseQuantity', this.cartItem?._id)
    }

    public deleteItem(){
        this.$emit('deleteItem', this.cartItem?._id)
    }
}
