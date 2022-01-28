AFRAME.registerComponent('rocks',{
    init:function(){
        posX = [10,-23,-5,60,40,-10,20,-20,24,30]
        posZ = [-3,-2,-5,0,1,2,-7,13,4,-8]

        for(var i = 0; i<5; i++){
            var rock = document.createElement('a-entity')
            rock.setAttribute('id','rock'+i)
            rock.setAttribute('position',{
                x:posX[i],
                y:0.1,
                z:posZ[i]
            })
            if(i%2 === 0){
                rock.setAttribute('gltf-model','./assets/rocks1/scene.gltf')
                rock.setAttribute('scale',{
                    x:0.5,
                    y:0.5,
                    z:0.5
                })
            }
            else{
                rock.setAttribute('gltf-model','./assets/rock2/scene.gltf')
                rock.setAttribute('scale',{
                    x:1,
                    y:1,
                    z:1
                })
            }
            var scene = document.querySelector('#scene')
            scene.appendChild(rock)
        }
    }
})