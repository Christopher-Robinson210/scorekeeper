var myModal = new bootstrap.Modal(document.getElementById('myModal'), {focus: true});
var myInput = document.getElementById('myInput');
var modal = new Modal(myModal, document.getElementById('myModalLabel'), document.getElementById('myModalBody'), document.getElementById('myModalButton'));
var modalInputNumPlayers = new Modal(myModal, document.getElementById('myModalLabel'), document.getElementById('myModalBody'), document.getElementById('myModalButton'));
var modalInputPlayerNames = new Modal(myModal, document.getElementById('myModalLabel'), document.getElementById('myModalBody'), document.getElementById('myModalButton'));
var modalInputScore = new Modal(myModal, document.getElementById('myModalLabel'), document.getElementById('myModalBody'), document.getElementById('myModalButton'));

modal.setTitleText("Test");
modal.setMessageText("Hello World!");
modal.setButton("Test");
modalInputNumPlayers.setTitleText("Number of Players");
modalInputNumPlayers.setMessageText('<div class="input-group mb-3"><span class="input-group-text" id="playerCount">How Many Players?</span><input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"></div>');
modalInputPlayerNames.setButton("Accept");