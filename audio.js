var synth = new Tone.Synth().toMaster();
var dragging;

var pad = document.getElementById("pad");
var label = document.getElementById("label");

pad.addEventListener("pointerdown", down);
pad.addEventListener("pointerup", up);
pad.addEventListener("pointermove", move);

function down(event) {
  dragging = true;
}

function up(event) {
  dragging = false;
  synth.triggerRelease();
  label.innerHTML = "CLICK & DRAG";
}

function move(event) {
  if (dragging) {
      var x = event.pageX;
      var y = event.pageY;
      synth.setNote(x);
      label.innerHTML = Math.round(x) + "Hz";
      pad.style.backgroundColor = "rgb(${x}, ${y}, ${x - y})";
  }
}
