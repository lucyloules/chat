$(function () {
  var socket = io('http://34.227.11.223:3000'); //se sube al navegador
  $('form').submit(function () {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function (msg) {
    $('#messages').append($('<li>').text(msg));
  });
});

