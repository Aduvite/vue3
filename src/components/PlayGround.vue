<template>
    <div>
        <ScoreBoard />
        <GameMap />
    </div>
</template>

<script>
import ScoreBoard from '@/components/ScoreBoard';
import GameMap from '@/components/GameMap';

export default {
    name: "PlayGround",
    components: {
    ScoreBoard,
    GameMap
    }
}
</script>

<style scoped>

div {
    height: 100%;
    width: 100%;
    background-color: #578A34; 
}
</style>