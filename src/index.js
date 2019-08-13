module.exports = {
    register () {
      this.routes = [
        {
          path: '/arkhub',
          name: 'arkhub',
          component: 'ArkHub'
        }
      ]
  
      this.menuItems = [
        {
          routeName: 'arkhub',
          title: 'ArkHub'
        }
      ]
    },
  
    getComponentPaths () {
      return this.routes.reduce((all, route) => {
        return {
          ...all,
          [route.component]: `pages/${route.component}.js`
        }
      }, {})
    },
  
    getRoutes () {
      return this.routes
    },
  
    getMenuItems () {
      return this.menuItems
    }
  }
  