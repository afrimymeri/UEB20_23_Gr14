$(document).ready(function(){
    $(".hide").click(function(){
      $(this).hide();
    });
  });


  $(document).ready(function(){
    // Hide the table initially
    // $("table").hide();

    // Button click event to hide the table
    $("#hideBtn").click(function(){
      $("table").hide();
    });

    // Button click event to show the table

  });    
  
  $(document).ready(function(){
    // $("table").show();

    $("#showBtn").click(function(){
        $("table").show();
      });

  });
  
  