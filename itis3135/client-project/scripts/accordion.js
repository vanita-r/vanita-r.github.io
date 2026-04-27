$(document).ready(function () {
    // 1st Implementation: jQuery UI Accordion (The Widget)
    // target the ID "accordion" and define the content element 'article'
    $("#accordion").accordion({
        header: "h4",
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
});