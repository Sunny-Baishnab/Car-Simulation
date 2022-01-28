AFRAME.registerComponent('obstacles',{

    init:function(){
        var posX = [0,-5,8,17,-14,50,33,-25,9,16]
        var posZ = [-9,2,20,-10,4,7,19,-12,-25,3,-6]

        for(var i = 0; i<6; i++){
            var box = document.createElement('a-entity')
            var px = posX[i]
            var pz = posZ[i]
            var py = 1

            box.setAttribute('id','box'+i)
            box.setAttribute('position',{
                x:px, 
                y:py,
                z:pz
            })
            box.setAttribute('gltf-model','./assets/boxes/scene.gltf')
            box.setAttribute('scale',{
                x:0.5,
                y:0.5,
                z:0.5
            })
            var scene = document.querySelector('#scene')
            scene.appendChild(box)
        }
    }
})