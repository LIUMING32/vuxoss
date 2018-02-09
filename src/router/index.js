import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Find from '@/components/find'
import Left from '@/components/finds/left'
import Right from '@/components/finds/right'
import Main from '@/components/finds/main'

Vue.use(Router)

export default new Router({
	routes: [
	    {
	      path: '/',
	      name: 'home',
	      component: Home,
	    },
	    {
	      path: '/home',
	      name: 'home0',
	      component: Home,
	    },
	    {
	      path: '/find',
	      name: 'find',
	      component: Find,
	      children:[
	        {
		      path: '/',
		      components: {
		        default:Main,
		        left:Left,
		        right:Right
		      }
		    },{
		      path: '/Hi',
		      components: {
		        default:Main,
		        left:Left,
		        right:Right
		      }
		    }
	      ]
	    }
	]
})
