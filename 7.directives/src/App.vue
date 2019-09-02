<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>build in Directives</h1>
                <p v-text="'some text'"></p>

            </div>
        </div>

        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>custom in Directives</h1>
                <p v-highlight:background.delayed="'red'">sdfsdfs</p>
                <p v-local-highlight:background.delayed.blink="{ mainColor: 'red', secondColor: 'green', delay: 500 }">local</p>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, bindind, vnode) {
                    let delay = 0;
                    if (bindind.modifiers['delayed']) {
                        delay = 3000;
                    }

                    if (bindind.modifiers['blink']) {
                        let mainColor = bindind.value.mainColor;
                        let secondColor = bindind.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval( () =>{
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
                                if(bindind.arg == 'background'){
                                    el.style.backgroundColor = currentColor
                                } else {
                                    el.style.color = currentColor
                                }
                            }, bindind.value.delay);
                        }, delay)
                    } else {
                        setTimeout(() => {
                            if(bindind.arg == 'background'){
                                el.style.backgroundColor = bindind.value
                            } else {
                                el.style.color = bindind.value
                            }
                        }, delay)
                    }
                }
            }
        }
    }
</script>

<style>

</style>
