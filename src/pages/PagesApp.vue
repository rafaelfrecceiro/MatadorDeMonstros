<template>
    <div class="container">
        <player-section :id="1"/>
        <player-section :id="2"/>
    </div>
</template>

<script>
import PlayerSection from "@/components/PlayerSection";

export default {
    components: {PlayerSection}
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-around
}
</style>
