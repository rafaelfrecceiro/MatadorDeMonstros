<template>
    <div class="container">
        <player-section :obj="player" :gameOver="gameOverPlayer"/>
        <player-section :obj="enemy" :gameOver="gameOverEnemy"/>
        <actions-bar @make-move="getMovePlayer" :gameOver="gameOverGeneral"/>
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
            gameOverPlayer: false,
            gameOverEnemy: false,
            actionPlayer: "",
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
        this.addLog("Iniciando batalha!", "system")
    },
    watch: {
        'player.stats.life'(newVal){
            if(newVal <= 0) {
                this.logs.push({
                    content: this.player.name + " morreu",
                    type: "player"
                })
                this.gameOverPlayer = true;
            }
        },
        'enemy.stats.life'(newVal){
            if(newVal <= 0) {
                this.logs.push({
                    content: this.enemy.name + " morreu",
                    type: "player"
                })
                this.gameOverEnemy = true;
            }
        }
    },
    computed:{
        gameOverGeneral(){
            return this.gameOverPlayer || this.gameOverEnemy
        }
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
                this.actionPlayer = 'attack';
                let min = Math.ceil(5);
                let max = Math.floor(15);
                let damage = (Math.floor(Math.random() * (max - min) + min)) + this.player.stats.strength

                if ((this.enemy.stats.life - damage) >= 0) this.enemy.stats.life -= damage;
                else this.enemy.stats.life = 0;

                this.addLog(this.player.name + " atacou com " + damage + " de ataque", "player")
            } else if (type === 'defense') {
                this.actionPlayer = 'defense';

                let min = Math.ceil(5);
                let max = Math.floor(15);
                let absorb = (Math.floor(Math.random() * (max - min) + min)) + this.player.stats.defense
                this.actionPlayer += "|"+ absorb

                this.addLog(this.player.name + " está me modo de defesa, absorvendo " + absorb + " de dano", "player")
            } else if (type === 'cure') {
                this.actionPlayer = 'cure';
                let min = Math.ceil(5);
                let max = Math.floor(15);
                let cured = (Math.floor(Math.random() * (max - min) + min)) + this.player.stats.magic

                this.player.stats.life += cured;

                this.addLog(this.player.name + " curou " + cured + " pontos de vida", "player")
            }

            this.getMoveEnemy();
        },
        getMoveEnemy() {
            let min = Math.ceil(8);
            let max = Math.floor(20);
            let damage = (Math.floor(Math.random() * (max - min) + min)) + this.enemy.stats.strength

            let actPlayer = this.actionPlayer.split("|")
            if(actPlayer[0] === 'defense') damage = damage - actPlayer[1]

            if ((this.player.stats.life - damage) >= 0) this.player.stats.life -= damage;
            else this.player.stats.life = 0;

            this.addLog(this.enemy.name + " atacou com " + damage + " de ataque", "enemy")
        },
        addLog(content, type){
            this.logs.push({
                content: content,
                type: type
            })
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
