<template>
    <v-card width="60%" class="actionsBar">
        <v-card-text style="display: flex; justify-content: center; flex-wrap: wrap">
            <v-btn elevation="2" style="font-weight: bold; background-color: lightgreen" class="buttonAction"
                   @click="makeAttack()">Atacar
            </v-btn>
            <v-btn elevation="2" style="font-weight: bold; background-color: lightgrey" class="buttonAction"
                   @click="makeDefense()">Defender
            </v-btn>
            <v-btn elevation="2" style="font-weight: bold; background-color: mediumpurple" class="buttonAction"
                   @click="makeCure()">Curar
            </v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        gameOver: {
            required: false,
            type: Boolean,
            default: false
        }
    },
    methods: {
        makeAttack() {
            if(!this.gameOver) this.$emit("make-move", "attack")
        },
        makeDefense() {
            if(!this.gameOver) this.$emit("make-move", "defense")
        },
        makeCure() {
            if(!this.gameOver) this.$emit("make-move", "cure")
        }
    }
}
</script>

<style scoped>
.actionsBar {
    margin-top: 2rem;
}

.buttonAction {
    margin-right: 1rem;
}
</style>
