var synth = new Tone.Synth().toMaster();

var pad = document.getElementById('pad')
var label = document.getElementById('label')

var mouseCoord = function(event){
  var x = event.pageX
  synth.triggerAttack(x)
  label.innerHTML = Math.round(x) + 'Hz'
  pad.style.backgroundColor = 'rgb '
}

function held(event) {
  mouseCoord
}

function release(event) {
  synth.triggerRelease()
  label.innerHTML = 'CLICK / DRAG'
}

pad.addEventListener('pointerdown', held)
pad.addEventListener('pointerup', release)
pad.addEventListener('pointermove', mouseCoord)
