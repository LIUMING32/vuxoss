<template>
  <div>
		<ul>
			<li><router-link to="/">{{word1}}</router-link></li>
			<li><router-link to="/">{{word2}}</router-link></li>
		</ul>
  </div>
</template>

<script>
import { Group, Cell,} from 'vux'
export default {
	name: 'lef',
  data () {
    return {
      word1: "美图",
  		word2: "美景",
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
