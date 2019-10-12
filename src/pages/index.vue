<template>
    <div class="page-a">
        <div @tap="handleClick">{{ text }}</div>
        <wepy-list></wepy-list>
    </div>
</template>

<script>
import wepy from "@wepy/core";
import { searchValue } from '@/api/index'
wepy.page({
    data: {
        text: '首页'
    },
    methods: {
        getData () {
            console.log(1221);
            // searchValue({ wd: '百度' }).then(res => {
            //     console.log(res);
            // })
        },
        handleClick () {
            console.log(13)
        }
    },
    onLoad () {
        this.getData();
    },
})
</script>
<config>
{
  "usingComponents": {
    "wepy-list": "../components/wepy-list"
  }
}
</config>

