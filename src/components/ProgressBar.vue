<template>
    <div
        style="background: lightcyan; height: 25px; border: 1px solid dimgray"
        :style="{'width': maxValue+'px'}"
    >
        <div
            style="height: 23px"
            :style="{'width': currentValue+'px'}"
            :class="[fillBar]"
        >
        </div>
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
    },
    computed: {
        fillBar() {
            if (this.checkpercent >= 75) return "lifeGood"
            if (this.checkpercent >= 30 && this.checkpercent < 60) return "lifeWarning"
            if (this.checkpercent > 0 && this.checkpercent < 30) return "lifeDanger"
            return 'lifeGood'
        },
        checkpercent(){
            return (this.currentValue * 100) / 400
        }
    },
    watch: {
        currentValue(newValue) {
            if (newValue <= 0) {
                //
            }
        }
    }
}
</script>

<style scoped>
.lifeGood {
    background-color: green;
}

.lifeWarning {
    background-color: yellow;
}

.lifeDanger {
    background-color: red;
}
</style>
