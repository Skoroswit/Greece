$( function() {
    $( ".datepicker" ).datepicker();

    var availableTags = [
      "Ateny",
        "Sparta",
        "Saloniki",
        "Chania",
        "Heraklion"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );