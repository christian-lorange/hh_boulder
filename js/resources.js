//file updated at 01/25/19 07:26:23.089



$(function(){
      
var $filterCheckboxes = $('input[type="checkbox"]');

$filterCheckboxes.on('change', function() {

  var selectedFilters = {};

  $filterCheckboxes.filter(':checked').each(function() {

    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }

    selectedFilters[this.name].push(this.value);

  });

  // create a collection containing all of the filterable elements
  var $filteredResults = $('.venue');

  // loop over the selected filter name -> (array) values pairs
  $.each(selectedFilters, function(name, filterValues) {

    // filter each .venue element
    $filteredResults = $filteredResults.filter(function() {

      var matched = false,
        currentFilterValues = $(this).data('category').split(' ');

      // loop over each category value in the current .venue's data-category
      $.each(currentFilterValues, function(_, currentFilterValue) {

        // if the current category exists in the selected filters array
        // set matched to true, and stop looping. as we're ORing in each
        // set of filters, we only need to match once

        if ($.inArray(currentFilterValue, filterValues) != -1) {
          matched = true;
          return false;
        }
      });

      // if matched is true the current .venue element is returned
      return matched;

    });
  });

  $('.venue').hide().filter($filteredResults).show();

});


    });


  setTimeout(function(){
 $("#venues").load( "https://raw.githack.com/christian-lorange/hh_boulder/master/hh.html" );
  },200);

 
  function days() {

   var x = document.getElementsByClassName("card");
    var y = document.getElementsByClassName("btn btn-link");
    var z = document.getElementById("refresh_btn");

    
 


  setTimeout(function(){

   $("#modal-content").load("https://raw.githack.com/christian-lorange/hh_boulder/master/cards.html");
  
   var d = new Date();
   var n = d.getDay();

   var now = new Date();
   var l = now.getDay();
   var today1 = new Date().getHours()
   var today2 = new Date().getMinutes()/60;
   var today = today1+today2;


   var weekday=new Array(7);
       weekday[0]="sunday";
       weekday[1]="monday";
       weekday[2]="tuesday";
       weekday[3]="wednesday";
       weekday[4]="thursday";
       weekday[5]="friday";
       weekday[6]="saturday";

var hh = {0:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},1:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},2:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},3:{0: {1:0,2:0},1: {1:15,2:17},2: {1:15,2:17},3: {1:15,2:17},4: {1:15,2:17},5: {1:15,2:17},6: {1:0,2:0}},4:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},5:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},6:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},7:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},8:{0: {1:16,2:18},1: {1:16,2:18},2: {1:21.3,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},9:{0: {1:14,2:17},1: {1:14,2:17},2: {1:14,2:17},3: {1:14,2:17},4: {1:14,2:17},5: {1:14,2:17},6: {1:14,2:17}},10:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},11:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},12:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},13:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},14:{0: {1:0,2:0},1: {1:15,2:18.3},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:15,2:18.3}},15:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},16:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},17:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},18:{0: {1:15,2:18.3},1: {1:15,2:18.3},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:15,2:18.3}},19:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},20:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},21:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},22:{0: {1:0,2:0},1: {1:0,2:0},2: {1:15,2:22},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},23:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},24:{0: {1:14,2:18},1: {1:15,2:22},2: {1:14,2:18},3: {1:14,2:18},4: {1:14,2:18},5: {1:14,2:18},6: {1:14,2:18}},25:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},26:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},27:{0: {1:17,2:18.3},1: {1:17,2:18.3},2: {1:17,2:21},3: {1:17,2:18.3},4: {1:17,2:18.3},5: {1:17,2:18.3},6: {1:17,2:18.3}},28:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},29:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},30:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},31:{0: {1:14,2:18},1: {1:14,2:18},2: {1:14,2:18},3: {1:14,2:18},4: {1:14,2:18},5: {1:14,2:18},6: {1:14,2:18}},32:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},33:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},34:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},35:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},36:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},37:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},38:{0: {1:17,2:22},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},39:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},40:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},41:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},42:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},43:{0: {1:15,2:19},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},44:{0: {1:0,2:0},1: {1:14.3,2:17.3},2: {1:14.3,2:17.3},3: {1:14.3,2:17.3},4: {1:14.3,2:17.3},5: {1:14.3,2:17.3},6: {1:14.3,2:17.3}},45:{0: {1:15,2:20},1: {1:15,2:20},2: {1:15,2:20},3: {1:15,2:20},4: {1:15,2:20},5: {1:15,2:20},6: {1:15,2:20}},46:{0: {1:15,2:20},1: {1:15,2:20},2: {1:15,2:20},3: {1:15,2:20},4: {1:15,2:20},5: {1:15,2:20},6: {1:15,2:20}},47:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},48:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},49:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},50:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},51:{0: {1:16,2:18},1: {1:16,2:22},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},52:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},53:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},54:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},55:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},56:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},57:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},58:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},59:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},60:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},61:{0: {1:17,2:19},1: {1:17,2:19},2: {1:17,2:19},3: {1:17,2:19},4: {1:17,2:19},5: {1:17,2:19},6: {1:17,2:19}},62:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},63:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},64:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},65:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},66:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},67:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},68:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},69:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},70:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},71:{0: {1:0,2:0},1: {1:16.3,2:18.3},2: {1:16.3,2:18.3},3: {1:16.3,2:18.3},4: {1:16.3,2:18.3},5: {1:0,2:0},6: {1:0,2:0}},72:{0: {1:0,2:0},1: {1:14.3,2:17.3},2: {1:14.3,2:17.3},3: {1:14.3,2:17.3},4: {1:14.3,2:17.3},5: {1:14.3,2:17.3},6: {1:14.3,2:17.3}},73:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},74:{0: {1:0,2:0},1: {1:11,2:23},2: {1:11,2:23},3: {1:15,2:18},4: {1:15,2:18},5: {1:0,2:0},6: {1:0,2:0}},75:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},76:{0: {1:15.3,2:18},1: {1:11,2:21},2: {1:15.3,2:18},3: {1:15.3,2:18},4: {1:15.3,2:18},5: {1:15.3,2:18},6: {1:15.3,2:18}},77:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},78:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},79:{0: {1:15.3,2:17.3},1: {1:15.3,2:17.3},2: {1:15.3,2:17.3},3: {1:15.3,2:17.3},4: {1:15.3,2:17.3},5: {1:15.3,2:17.3},6: {1:15.3,2:17.3}},80:{0: {1:17,2:18.3},1: {1:17,2:18.3},2: {1:17,2:18.3},3: {1:17,2:18.3},4: {1:17,2:18.3},5: {1:17,2:18.3},6: {1:17,2:18.3}},81:{0: {1:16,2:19},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:16,2:19}},82:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},83:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},84:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},85:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},86:{0: {1:14,2:18},1: {1:14,2:18},2: {1:14,2:18},3: {1:14,2:18},4: {1:14,2:18},5: {1:14,2:18},6: {1:14,2:18}},87:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},88:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},89:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},90:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},91:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},92:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},93:{0: {1:15,2:17},1: {1:15,2:17},2: {1:15,2:17},3: {1:15,2:17},4: {1:15,2:17},5: {1:15,2:17},6: {1:15,2:17}},94:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},95:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},96:{0: {1:15,2:19},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},97:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},98:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},99:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},100:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},101:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},102:{0: {1:16,2:17.3},1: {1:11,2:17.3},2: {1:11,2:17.3},3: {1:11,2:17.3},4: {1:11,2:17.3},5: {1:11,2:17.3},6: {1:11,2:17.3}},103:{0: {1:0,2:0},1: {1:17,2:18.3},2: {1:17,2:18.3},3: {1:17,2:18.3},4: {1:17,2:18.3},5: {1:17,2:18.3},6: {1:17,2:18.3}},104:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},105:{0: {1:14,2:18},1: {1:14,2:18},2: {1:14,2:18},3: {1:14,2:18},4: {1:14,2:18},5: {1:14,2:18},6: {1:14,2:18}},106:{0: {1:0,2:0},1: {1:16,2:22},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:11.3,2:18},6: {1:11.3,2:18}},107:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},108:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},109:{0: {1:21,2:24},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},110:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},111:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},112:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},113:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},114:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},115:{0: {1:14,2:17},1: {1:14,2:17},2: {1:14,2:17},3: {1:14,2:17},4: {1:14,2:17},5: {1:14,2:17},6: {1:14,2:17}},116:{0: {1:15,2:18.3},1: {1:15,2:18.3},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:15,2:18.3}},117:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},118:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},119:{0: {1:11,2:24},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},120:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},121:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},122:{0: {1:17,2:19},1: {1:17,2:19},2: {1:17,2:19},3: {1:17,2:19},4: {1:17,2:19},5: {1:17,2:19},6: {1:17,2:19}},123:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},124:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},125:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},126:{0: {1:0,2:0},1: {1:11,2:22},2: {1:11,2:22},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},127:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},128:{0: {1:17.3,2:18.3},1: {1:17.3,2:18.3},2: {1:17.3,2:18.3},3: {1:17.3,2:18.3},4: {1:17.3,2:18.3},5: {1:17.3,2:18.3},6: {1:17.3,2:18.3}},129:{0: {1:15,2:18.3},1: {1:15,2:18.3},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:15,2:18.3}},130:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},131:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},132:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},133:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},134:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:21,2:24}},135:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},136:{0: {1:15,2:17},1: {1:15,2:17},2: {1:15,2:17},3: {1:15,2:17},4: {1:15,2:17},5: {1:15,2:17},6: {1:15,2:17}},137:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},138:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},139:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},140:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},141:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}}};






   var elements = document.getElementsByClassName(weekday[d.getDay()]);
    for(i=0; i<elements.length; i++) {
      elements[i].style.display =    'inline';

            if (today >=hh[i][l][1] && today <= hh[i][l][2]-1) {
               elements[i].style.color = 'blue';
               elements[i].style.fontSize='1.4em';
               elements[i].parentElement.style.backgroundColor='#adc5ed';
            } else if (today >=hh[i][l][1]-1 && today <= hh[i][l][1]) {
              elements[i].parentElement.style.backgroundColor='#fff772';
            } else if (today >=hh[i][l][2]-1 && today <= hh[i][l][2]) {
              elements[i].style.color = 'blue';
              elements[i].style.fontSize='1.4em';
              elements[i].parentElement.style.backgroundColor='#ef7a7a';
            } else {}
    }


// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
   slides[slideIndex-1].style.display = "block";
  }


    }, 800);

}

