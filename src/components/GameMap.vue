<template>
    <div ref="div">
        <canvas ref="canvas" tabindex="0"></canvas>
        <button @click="restart" v-if="$store.state.restart">开始</button>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { GameMap } from '@/assets/scripts/GameMap';
import { useStore } from 'vuex';

export default {
    name: "GameMap",
    setup: () => {
        let div = ref(null);
        let canvas = ref(null);
        const store = useStore();
        let gamemap = null;
    
        onMounted(() => {
            gamemap = new GameMap(canvas.value.getContext('2d'), div.value, store);
        });
    
        const restart = () => {
            gamemap.restart();
        }

        return { 
            div,
            canvas,
            restart,
        }
    }
}
</script>

<style scoped>
div {
    height: calc(100% - 8vh);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
canvas {
    background-color: #AAD751;
}

button {
    position: absolute;
    background-color: #0d6efd;
    border: solid 0;
    border-radius: 5px;
    font-size: 3vh;
    color: white;
    padding: 3vh;
    cursor: pointer;
}

</style>