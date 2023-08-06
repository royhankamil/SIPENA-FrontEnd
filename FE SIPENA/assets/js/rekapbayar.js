
    $(document).ready(function () {

      var tableDate = "";
      var tableContent = "";
      var $td = "";

      var $label = "<label class='label-checkbox'><input type='checkbox'/></label>";

      for (var i = 1; i <= 12; i++) {
        if (window.CP.shouldStopExecution(0)) break;
        tableDate += "<td class='td-date text-center'><b class='date'>" + i + "</b></td>";
      } window.CP.exitedLoop(0);

      $(tableDate).prependTo(".table-row-head");


      for (var i = 1; i <= 12; i++) {
        if (window.CP.shouldStopExecution(1)) break;
        tableContent += "<td class='text-center' data-date='" + i + "'>" + $label + "</td>";
      } window.CP.exitedLoop(1);

      $(tableContent).appendTo(".table-body-content tr");

      for (var td = 1; td <= 2; td++) {
        if (window.CP.shouldStopExecution(2)) break;
        $td += "<td class='text-center' data-info='" + td + "'</td>";
      } window.CP.exitedLoop(2);

      $($td).insertAfter(".table-body-content td[data-date='12']");


      $(document).on("change", ".label-checkbox", function () {
        $(this).toggleClass("active");
        checkData();
      });


    });

    function checkData() {
      $(".label-checkbox").each(function () {
        var $parents = $(this).parents("tr");
        var $checked = $parents.find("input:checked").length;
        var $no_checked = $parents.find("input").length;
        var $true = $checked;
        var $false = [$no_checked - $checked];

        $parents.find("[data-info='1']").html($true);
        $parents.find("[data-info='2']").html($false);
      });
    }

    $(document).ready(function () {
      checkData();
    });
 