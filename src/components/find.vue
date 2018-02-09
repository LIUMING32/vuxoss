<template>
  <div>
		<router-view style="width:100%;background-color:#333;height:300px;"></router-view>
		<router-view name="left" style="float:left;width:50%;background-color:#666;height:300px;"></router-view>
		<router-view name="right" style="float:right;width:50%;background-color:#999;height:300px;"></router-view>
  </div>
</template>

<script>
import { Group, Cell,} from 'vux'
export default {
	name: 'HelloWorld',
  data () {
    return {
      showMenus: false,
      
    }
  },
  components: {
    
  },
	methods: {
		
   
	},
	mounted () {
    
  },
	
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

</style>
