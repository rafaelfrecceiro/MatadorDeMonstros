<template>
    <div style="width: 100%; margin-bottom: 2px; padding-bottom: 5px; padding-top: 5px"
         :class="{'logEnemy': type === 'enemy', 'logPlayer': type === 'player'}">
        <h2>{{ content }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            required: true,
            type: String
        },
        type: {
            required: false,
            type: String,
            default: "player"
        }
    }
}
</script>

<style scoped>
.logEnemy {
    background-color: lightpink;
}

.logPlayer {
    background-color: lightgreen;
}
</style>
