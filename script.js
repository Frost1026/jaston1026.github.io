var synth = new Tone.Synth().toMaster();
var dragging;

var pad = document.getElementById('pad');
var label = document.getElementById('label');

function held(event) {
  dragging = true;
}

function release(event) {
  dragging = false;
  synth.triggerRelease();
  label.innerHTML = 'CLICK / DRAG';
}

function moving(event) {
  if (dragging) {
      var x = event.pageX;
      synth.setNote(x);
      label.innerHTML = Math.round(x) + 'Hz';
  }
}

pad.addEventListener('pointerdown', held);
pad.addEventListener('pointerup', release);
pad.addEventListener('pointermove', moving);
