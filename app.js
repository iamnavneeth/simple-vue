const app=Vue.createApp({

    data(){
        return{
            showMobile:true,
            mobiles:[
                {brand:'apple',price:100000,isFav:false},
                {brand:'samsung',price:50000,isFav:true},
                {brand:'vivo',price:20000,isFav:false}
            ]
        }
    },
    methods:{
        toggleMobile(){
            this.showMobile=!this.showMobile
        },
        changeFav(mobile){
            mobile.isFav=!mobile.isFav

        }
    }

})

app.mount('#app')