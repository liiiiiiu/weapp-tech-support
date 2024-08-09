// components/TechSupport/TechSupport.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },

  properties: {
    image: {
      type: String,
      value: ''
    },
    name: {
      type: String,
      value: ''
    },
    useCustomContent: {
      type: Boolean,
      value: false
    },
    customStyle: {
      type: String,
      value: ''
    }
  },

  data: {
    _startYear: null
  },

  lifetimes: {
    attached() {
      const nowYear = new Date().getFullYear()

      this.setData({
        _startYear: this.properties.startYear ? this.properties.startYear : nowYear
      })
    }
  },

  methods: {

  }
})