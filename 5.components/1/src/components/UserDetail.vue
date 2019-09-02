<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">reset name</button>
        <button @click="resetFn()">reset name2</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        props: {
            myName: {
                // type: Object,
                // default: function () {
                //     return {
                //         name: 'slava'
                //     }
                // }
                type: String,
                require: true,
                default: 'slava'
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split('').reverse().join('')
            },
            resetName(){
                this.myName = 'tttttttt'
                this.$emit('nameWasReset', this.myName)
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
