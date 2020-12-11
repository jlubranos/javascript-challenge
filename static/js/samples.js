var selectValues = {
    "1": "test 1",
    "2": "test 2"
  };
  var $mySelect = $('#mySelect');
  //
  $.each(selectValues, function(key, value) {
    var $option = $("<option/>", {
      value: key,
      text: value
    });
    $mySelect.append($option);
  });
<script language="JavaScript" type="text/javascript">
function sortlist() {
var lb = document.getElementById('mylist');
arrTexts = new Array();

for(i=0; i<lb.length; i++)  {
  arrTexts[i] = lb.options[i].text;
}

arrTexts.sort();

for(i=0; i<lb.length; i++)  {
  lb.options[i].text = arrTexts[i];
  lb.options[i].value = arrTexts[i];
}
}
</script>
