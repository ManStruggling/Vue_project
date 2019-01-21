<template>
    <div>
        <top></top>
        <slider></slider>
        <list></list>
    </div>
</template>

<script>
import top from "./top";
import slider from './slider';
import list from './list';
export default {
    components:{
        list,slider,top
    }
}
</script>