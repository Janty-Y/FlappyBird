import BaseScene from './BaseScene';

class ScoreScene extends BaseScene {

    constructor (config) {

        super('ScoreScene', {...config, canGoBack: true});
       
    }

    create () {
        super.create();
 
        const bestScore = localStorage.getItem('bestScore');
        this.add.text(...this.screenCenter, `Best Score: ${bestScore || 0}`, this.fontOptions)
        .setOrigin(0.5)

        const clearScore = this.add.text(this.config.width/2, this.config.height/2 +42, `Clear Score`, this.fontOptions)
        .setOrigin(0.5)
        .setInteractive()

        clearScore.on('pointerover',  () => {
            clearScore.setStyle({fill: '#ff0'});
            
        })
        clearScore.on('pointerout', () => {
            clearScore.setStyle({fill: '#fff'});
        })
        clearScore.on('pointerup',  () => {
            localStorage.clear();
            this.scene.restart();
        })
        
    }

}

export default ScoreScene;
