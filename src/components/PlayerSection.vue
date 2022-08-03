<template>
    <v-card width="40%">
        <v-card-text style="display: flex; justify-content: center; flex-wrap: wrap">
            <h3 style="width: 100%; margin-bottom: 20px">Player {{ id }}</h3>
            <progress-bar/>
        </v-card-text>
    </v-card>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";

export default {
    components: {ProgressBar},
    props: {
        id: {
            required: true,
            type: Number
        }
    }
}
</script>

<style scoped>

</style>
