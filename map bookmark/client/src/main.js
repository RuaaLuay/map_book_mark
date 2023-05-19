import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import GMapAutocomplete from 'vue2-google-maps/dist/components/autocomplete'
import Polyline from 'vue2-google-maps/dist/components/polyline.js' // replace src with dist if you have Babel issues
// replace src with dist if you have Babel issues
import router from './router';


Vue.component('GMapAutocomplete', GMapAutocomplete)
Vue.component('GMapPolyline', Polyline)


Vue.config.productionTip = false

Vue.use(VueGoogleMaps, { //use vue2-google-map to display maps with some feature (marker, infowindow, etc)
        load: {
            key: 'AIzaSyDEsOm9JwBayoz_CuJIslL3ume-ZE8h2B0',
            libraries: 'places',
            //the key generated when register project free trial on google maps JS API
        },
    }),

    new Vue({
        router: router, // Use the first router instance
        vuetify, // Use the vuetify plugin
        render: (h) => h(App),
    }).$mount('#app');