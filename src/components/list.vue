<template>
    <div>
        <mainNav></mainNav>
        <goodsList :goodsMsg='list'></goodsList>
        <indexShopCar></indexShopCar>
    </div>
</template>

<script>
import mainNav from './mainNav';
import goodsList from './goodsList';
import indexShopCar from './indexShopCar';
export default {
    data(){
        return{
            list:[]
        }
    },
    components:{
        mainNav,goodsList,indexShopCar
    },
    mounted() {
        this.$http({
            url:'/data/home_list.data',
        }).then(
            res=>{
                this.list = res.data
            }
        )
    },
}
</script>