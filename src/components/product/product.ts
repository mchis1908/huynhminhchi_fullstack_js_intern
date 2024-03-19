import { Options, Vue } from "vue-class-component";
import { MutationTypes } from "@/store/mutation-types";
import ProductItem from "./components/product-item.vue";

@Options({
    components: {
        ProductItem
    },
})
export default class Product extends Vue {
    public unsubscribe!: any;
    public productItems: any=[];

    public mounted(){
        this.getInitData();
    }

    public async getInitData(){
        const res = await this.$store.dispatch(MutationTypes.GET_ALL_PRODUCTS);
        if(res?.status ===200){
            this.productItems = res.data.products
        }
    }
}
