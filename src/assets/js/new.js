$('img').on('click', function () {
    var divID = $(this).attr('data-box');
    $(this).addClass('Active').siblings().removeClass('Active');
    $('#' + divID).addClass('Active').siblings().removeClass('Active');
  })