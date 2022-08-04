<template>
    <v-card width="60%" style="margin-top: 2rem">
        <v-card-text style="display: flex; justify-content: center; flex-wrap: wrap">
            <log-item
                v-for="log in logs"
                :key="log.id"
                :content="log.content"
                :type="log.type"
            />
        </v-card-text>
    </v-card>
</template>

<script>
import LogItem from "@/components/LogItem";

export default {
    components: {
        LogItem
    },
    props: {
        logs: {
            required: false,
            type: Array
        }
    }
}
</script>

<style scoped>

</style>
