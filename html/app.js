$(function() {
    /* open the UI for user */
    window.addEventListener('message', function(event) {
      if (event.data.type == "openGeneral"){
        $('.container').css('visibility', 'visible')
      } else if (event.data.type == "closeAll"){
        $('.container').css('visibility', 'hidden')
      }
    });
  });
  document.onkeyup = function(data){
    if (data.which == 27){
      $('.container').css('visibility', 'hidden')
          $.post('http://vehcontrol/NUIFocusOff', JSON.stringify({}));
      }
  }

  $('#ignition').click(function(){
    $.post('http://vehcontrol/ignition', JSON.stringify({}));
  })
  $('#frontHood').click(function(){
    $.post('http://vehcontrol/doors', JSON.stringify({
      door: 4
    }));
  })
  $('#rearHood').click(function(){
    $.post('http://vehcontrol/doors', JSON.stringify({
      door: 5
    }));
  })
  $('#rearHood2').click(function(){
    $.post('http://vehcontrol/doors', JSON.stringify({
      door: 6
    }));
  })
  $('#interiorLight').click(function(){
    $.post('http://vehcontrol/interiorLight', JSON.stringify({}));
  })
  $('#bombbay').click(function(){
    $.post('http://vehcontrol/bombbay', JSON.stringify({}));
  })
  $('#windowFrontLeft').click(function(){
    $.post('http://vehcontrol/windows', JSON.stringify({
      window: 0,
      door: 0
    }));
  })
  $('#doorFrontLeft').click(function(){
    $.post('http://vehcontrol/doors', JSON.stringify({
      door: 0
    }));
  })
  $('#seatFrontLeft').click(function(){
    $.post('http://vehcontrol/seatchange', JSON.stringify({
      seat: -1
    }));
  })
  $('#seatFrontRight').click(function(){
    $.post('http://vehcontrol/seatchange', JSON.stringify({
      seat: 0,
    }));
  })
  $('#doorFrontRight').click(function(){
    $.post('http://vehcontrol/doors', JSON.stringify({
      door: 1
    }));
  })
  $('#windowFrontRight').click(function(){
    $.post('http://vehcontrol/windows', JSON.stringify({
      window: 1,
      door: 1
    }));
  })
  $('#windowRearLeft').click(function(){
    $.post('http://vehcontrol/windows', JSON.stringify({
      window: 2,
      door: 2
    }));
  })
  $('#doorRearLeft').click(function(){
    $.post('http://vehcontrol/doors', JSON.stringify({
      door: 2
    }));
  })
  $('#seatRearLeft').click(function(){
    $.post('http://vehcontrol/seatchange', JSON.stringify({
      seat: 1,
    }));
  })
  $('#seatRearRight').click(function(){
    $.post('http://vehcontrol/seatchange', JSON.stringify({
      seat: 2,
    }));
  })
  $('#doorRearRight').click(function(){
    $.post('http://vehcontrol/doors', JSON.stringify({
      door: 3
    }));
  })
  $('#windowRearRight').click(function(){
    $.post('http://vehcontrol/windows', JSON.stringify({
      window: 3,
      door: 3
    }));
  })