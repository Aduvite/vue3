<template>
    <div class="score-board">   
        <div class="apple">
            <img src="https://bpic.51yuansu.com/pic3/cover/03/92/46/5c3443e78a382_610.jpg">
            <div>{{ $store.state.score }}</div>
        </div>
        <div class="cup">
            <img src="https://bpic.51yuansu.com/pic3/cover/03/92/46/5c3443e78a382_610.jpg">
            <div>{{ $store.state.record }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ScoreBoard",
}
</script>

<style scoped>

.score-board {
    height: 8vh;
    background-color: #4A752C;
    display: flex;
    justify-content: space-around;
    user-select: none;
}

.apple {
    display: flex;
    align-content: center;
}

.apple > img {
    width: 4.5vh;
    height: 5vh;
}

.apple > div {
    color: white;
    font-weight: bold;
    font-size: 2.5vh;
}

.cup {
    display: flex;
    align-content: center;
}

.cup > img {
    width: 4.5vh;
    height: 5vh;
}

.cup > div {
    color: white;
    font-weight: bold;
    font-size: 2.5vh;
    margin-left: 1vh;
}

</style>