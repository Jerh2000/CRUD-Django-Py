
$('#table-users').DataTable({
    searching: true,
    ordering: true,
    responsive : true,
    paging: true,
    dom: "t<'d-flex align-items-center'<'me-auto pb-2 mx-2'i><'mb-0 pb-2 mx-2'p>>",
    lengthMenu: [[20, 50, 100, -1], [20, 50, 100, "Todas"]],
    scrollY: 400,
    language:
    {
        url : "https://cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json",
    },
    buttons: 
    [
    
    ],
});



(function () {

    const btnEliminacion = document.querySelectorAll(".btnEliminacion");

    btnEliminacion.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const confirmacion = confirm('¿Seguro de eliminar el usuario?');
            if (!confirmacion) {
                e.preventDefault();
            }
        });
    });
    
})();