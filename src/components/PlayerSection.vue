<template>
    <v-card width="40%">
        <v-card-text style="display: flex; justify-content: space-around; flex-wrap: wrap">
            <v-img contain max-width="175" :src="renderImage"/>
            <div>
                <h1 style="width: 100%; margin-bottom: 20px">{{ obj.name }}</h1>
                <progress-bar
                    :maxValue="400"
                    :currentValue="calcMaxValueProgress"
                />
                <div style="display: flex">
                    <div style="width: 30%; margin-top: 1rem">
                        <h2>Ataque</h2>
                    </div>
                    <div style="width: 70%; margin-top: 1rem">
                        <h3>{{ obj.stats.strength }}</h3>
                    </div>
                </div>
                <div style="display: flex">
                    <div style="width: 30%; margin-top: 1rem">
                        <h2>Defesa</h2>
                    </div>
                    <div style="width: 70%; margin-top: 1rem">
                        <h3>{{ obj.stats.defense }}</h3>
                    </div>
                </div>
                <div style="display: flex">
                    <div style="width: 30%; margin-top: 1rem">
                        <h2>Mágica</h2>
                    </div>
                    <div style="width: 70%; margin-top: 1rem">
                        <h3>{{ obj.stats.magic }}</h3>
                    </div>
                </div>
                <div style="display: flex">
                    <div style="width: 30%; margin-top: 1rem">
                        <h2>HP</h2>
                    </div>
                    <div style="width: 70%; margin-top: 1rem">
                        <h3>{{ obj.stats.life }}</h3>
                    </div>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";

export default {
    components: {
        ProgressBar
    },
    props: {
        obj: {
            required: true,
            type: Object
        }
    },
    data() {
        return {
            starterMaxValue: 400,
            starterMaxValueLife: this.obj.stats.life
        }
    },
    computed: {
        renderImage() {
            if (this.obj.type === "player") return require('@/assets/players/' + this.obj.image + '.png');
            return require('@/assets/enemies/' + this.obj.image + '.png');
        },
        calcMaxValueProgress() {
            let valueProgressBar = (400 * this.obj.stats.life) / this.starterMaxValueLife
            return valueProgressBar
        }
    },
    methods: {}
}
</script>

<style scoped>

</style>
