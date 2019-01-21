<template>
    <div>
        <login-top></login-top>
        <login-part></login-part>
    </div>
</template>

<script>
import loginTop from './loginTop';
import loginPart from './loginPart';
export default {
    components:{
        loginTop,
        loginPart
    }
}
</script>