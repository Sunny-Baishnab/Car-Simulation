AFRAME.registerComponent('carControls',{
    schema:{
        speedOfRotation:{type:'number',default:0},
        movementOfCar:{type:'number',default:0}
    },

    init:function(){
        window.addEventListener('keyDown',(e)=>{
            this.data.speedOfRotation = this.el.getAttribute('rotation')
            this.data.movementOfCar = this.el.getAttribute('position')

            var carRotation = this.data.speedOfRotation
            var carPosition = this.data.movementOfCar

            if(e.key === 'ArrowUp'){
                carPosition.z-=4
                this.el.setAttribute('position',carPosition)
            }

            if(e.key === 'ArrowDown'){
                carPosition.z+=4
                this.el.setAttribute('position',carPosition)
            }

            if(e.key === 'ArrowLeft'){
                //carRotation.z-=0.01
                //carPosition.x-=3
                carRotation.y=90
                this.el.setAttribute('rotation',carRotation)
                this.el.setAttribute('position',carPosition)
                
                var environment = document.querySelector('#environment')
                var envRotation = environment.getAttribute('rotation')
                environment.setAttribute('rotation',{
                    x:envRotation.x+10,
                    y:envRotation.y-10,
                    z:envRotation.z+10
                })
            }

            if(e.key === 'ArrowRight'){
                //carRotation.z+=0.01
                carPosition.x+=3
                //this.el.setAttribute('rotation',carRotation)
                this.el.setAttribute('position',carPosition)
            }
        })
    }
})