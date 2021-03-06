//* Add PayPal Email
simpleCart({
  checkout: {
    type: "PayPal",
    email: "thriftandsellwithlucky@gmail.com"
  }
});

//* Add shopping cart dropdown in header
jQuery(document).ready(function () {
  $('.showCart').on('click', function () {
    $('#cartPopover').slideToggle('fast');
    $('.showCart span.dropdown').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
  })
});

//* Define spreadsheet URL (make sure you add the #gid=0 for the sheet you want to use)
const googleSheetURI = 'https://docs.google.com/spreadsheets/d/1M9XcbcpGaOO9iYP6JhxXUO9R0csetEaDPjYHlB6hSQM/edit#gid=0';
//https://docs.google.com/spreadsheets/d/1M9XcbcpGaOO9iYP6JhxXUO9R0csetEaDPjYHlB6hSQM/edit?usp=sharing

//* Compile the Handlebars template for HR leaders
const HRTemplate = Handlebars.compile($('#hr-template').html());

//* Load products from spreadsheet
$('#products').sheetrock({
  url: googleSheetURI,
  query: "select A,B,C,D,E",
  rowTemplate: HRTemplate
});
