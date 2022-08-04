<template>
    <div
        style="background: lightcyan; height: 25px; border: 1px solid dimgray"
        :style="{'width': maxValue+'px'}"
    >
        <div
            style="background: green; height: 25px"
            :style="{'width': currentValue+'px'}"></div>
    </div>
</template>

<script>
export default {
    props: {
        maxValue: {
            required: true,
            type: Number
        },
        currentValue: {
            required: true,
            type: Number
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped>

</style>
