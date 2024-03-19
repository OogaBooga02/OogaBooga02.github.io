$(document).ready(function() {
    $('.mobile-button a').click(function(e) {
        $(this).parent().parent().toggleClass('open');
        $(this).html($(this).html() == 'Close Menu' ? 'Menu' : 'Close Menu');
        e.preventDefault();
    });

    function toggleProjectDetails(projectId) {
        var projectDetails = document.getElementById(projectId).getElementsByClassName("project-details")[0];
        if (projectDetails.style.display === "none") {
            projectDetails.style.display = "block";
        } else {
            projectDetails.style.display = "none";
        }
    }
});
