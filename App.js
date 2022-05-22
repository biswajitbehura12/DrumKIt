
        window.addEventListener('keydown', function(e){
    
          //select corresponding audio
          const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
          //select corresponding key
          const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
    
          if (!audio){
            return
          }
          audio.currentTime = 0 // rewind to the start
          audio.play()
          key.classList.add('playing')
        
        })
    
        const removeTransition = function(e){
          if (e.propertyName !== 'transform')
            return
          this.classList.remove('playing')
        }
    
      
        const keys = document.querySelectorAll('.key')
        console.log(keys)
        keys.forEach(function(key){
          key.addEventListener('transitionend', removeTransition)
        })
    
