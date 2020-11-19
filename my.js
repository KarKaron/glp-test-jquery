$(function() {
  "use strict";

  function getItemById(price, view, id) {
    return $.getJSON("./data/"+id+".json", function (data) {
      $.each(data, function(i, item) {
        var classes = '';
        if (i%2 !== 0) {
          classes = ' class="striple"';
        }
        var price1 = item.tarifStavka;
        var price2 = item.pererabotkaHour;
        var price3 = item.hydrobort;
        if (price === 'driver') {
          price1 = parseInt(price1*0.8);
          price2 = parseInt(price2*0.8);
          price3 = parseInt(price3*0.8);
        }
        var hour = '';
        if(view === 'hour') {
          hour = item.hour
        }
        var point = '';
        if(view === 'point') {
          point = item.point;
        }
        var border = '';
        var cost = '';
        if(view === 'speed') {
          border = item.border;
          cost = item.cost;
        }
        $('.table-block table tbody').append(
        '<tr'+classes+'>' +  
        ' <td><strong>'+item.tonnazh+' т</strong></td>' +
        ' <td class="table-td-whide">'+item.type+'</td>' +
        ' <td>'+hour+'</td>' +
        ' <td>'+item.podacha+'</td>' +
        ' <td>'+item.expeditor+'</td>' +
        ' <td>'+price1+'</td>' +
        ' <td>'+price2+'</td>' +
        ' <td>'+price3+'</td>' +
        ' <td>'+point+'</td>' +
        ' <td>'+border+'</td>' +
        ' <td>'+cost+'</td>' +
        ' <td></td>' +
        ' <td></td>' +
        ' <td></td>' +
        ' <td></td>' +
        ' <td></td>' +
        ' <td></td>' +
        '</tr>'
        );
      });
    }); 
  }
  
  getItemById("client", "stavka", "tent");
  
  $('.btn').on('click', function() {
    var id = $(this).attr('id');
    var block = $(this).attr('data-block');
    $('#'+block+'.button-block  .btn').removeClass('active');
    $('#'+id).addClass('active');
    var blocks = $('.btn.active');
    var arr = [];
    blocks.each(function() {
      arr.push($(this).attr('id'));
    });    
    $('.table-block table tbody').text('');
    console.log(arr[0], arr[1], arr[2]);
    getItemById(arr[0], arr[1], arr[2]);
  });

});