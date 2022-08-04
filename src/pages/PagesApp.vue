<template>
    <div class="container">
        <player-section :obj="player"/>
        <player-section :obj="enemy"/>
        <actions-bar @make-move="getMovePlayer"/>
        <log-moves :logs="logs"/>
    </div>
</template>

<script>
import PlayerSection from "@/components/PlayerSection";
import ActionsBar from "@/components/ActionsBar";
import LogMoves from "@/components/LogMoves";

export default {
    components: {
        LogMoves,
        ActionsBar,
        PlayerSection
    },
    data() {
        return {
            logs: [],
            player: {
                name: "",
                image: "",
                type: "player",
                stats: {
                    life: 0,
                    strength: 0,
                    defense: 0,
                    magic: 0
                }
            },
            enemy: {
                name: "",
                image: "",
                type: "enemy",
                stats: {
                    life: 0,
                    strength: 0,
                    defense: 0,
                    magic: 0
                }
            },
            playerDB: [
                {
                    name: "Jarildo",
                    image: "warrior"
                },
                {
                    name: "Arqueiro Valente",
                    image: "archer"
                }
            ],
            enemyDB: [
                {
                    name: "Garganta Cortada",
                    image: "lantern"
                },
                {
                    name: "Dragão Vermelho",
                    image: "dragon"
                },
                {
                    name: "Esqueleto Guerreiro",
                    image: "skeleton"
                }
            ]
        }
    },
    created() {
        this.createPlayer()
        this.createEnemy()
    },
    methods: {
        createPlayer() {
            let min = Math.ceil(5);
            let max = Math.floor(15);

            let strength = Math.floor(Math.random() * (max - min) + min);
            let defense = Math.floor(Math.random() * (max - min) + min);
            let magic = Math.floor(Math.random() * (max - min) + min);

            min = Math.ceil(75);
            max = Math.floor(120);

            let life = Math.floor(Math.random() * (max - min) + min);

            this.player.stats.strength = strength
            this.player.stats.defense = defense
            this.player.stats.magic = magic
            this.player.stats.life = life

            let lengthPlayers = this.playerDB.length
            let playerSelected = Math.floor(Math.random() * lengthPlayers);
            this.player.name = this.playerDB[playerSelected].name
            this.player.image = this.playerDB[playerSelected].image
        },
        createEnemy() {
            let min = Math.ceil(5);
            let max = Math.floor(20);

            let strength = Math.floor(Math.random() * (max - min) + min);
            let defense = Math.floor(Math.random() * (max - min) + min);
            let magic = Math.floor(Math.random() * (max - min) + min);

            min = Math.ceil(100);
            max = Math.floor(150);

            let life = Math.floor(Math.random() * (max - min) + min);

            this.enemy.stats.strength = strength
            this.enemy.stats.defense = defense
            this.enemy.stats.magic = magic
            this.enemy.stats.life = life

            let lengthEnemies = this.enemyDB.length
            let enemySelected = Math.floor(Math.random() * lengthEnemies);
            this.enemy.name = this.enemyDB[enemySelected].name
            this.enemy.image = this.enemyDB[enemySelected].image
        },
        getMovePlayer(type) {
            if (type === 'attack') {
                let min = Math.ceil(5);
                let max = Math.floor(15);
                let damage = (Math.floor(Math.random() * (max - min) + min)) + this.player.stats.strength

                this.enemy.stats.life -= damage;

                this.logs.push({
                    content: this.player.name +" atacou com " + damage + " de ataque",
                    type: "player"
                })
            } else if (type === 'defense') {
                let min = Math.ceil(5);
                let max = Math.floor(15);
                let absorb = (Math.floor(Math.random() * (max - min) + min)) + this.player.stats.defense

                this.logs.push({
                    content: this.player.name +" está me modo de defesa, absorvendo " + absorb + " de dano",
                    type: "player"
                })
            } else if (type === 'cure') {
                let min = Math.ceil(5);
                let max = Math.floor(15);
                let cured = (Math.floor(Math.random() * (max - min) + min)) + this.player.stats.magic

                this.logs.push({
                    content: this.player.name +" curou " + cured + " pontos de vida",
                    type: "player"
                })
            }
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 2rem;
}
</style>
