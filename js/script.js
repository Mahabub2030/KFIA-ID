$(document).ready(function name(params) {
    var table = $('#example').DataTable({
        buttons:['copy' , 'csv' , 'excel' , 'pdf' , 'print']
    });

    table.buttons().container()
    .appendTo('#example_wrapper .col-md-6:eq(0)');
    
});
// var typed = new Typed((".skills"),{
//     strings : ['KFIA#4012'],
//     typeSpeed : 100,
//     backSpeed :100,
//     backDelay :1000,

// })