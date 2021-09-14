// Напишите аналог кода на чистом js
$(function() {
    $(".popup_open").on("click", function() {
        var data = "url=" + $("#url").val();
        var $form = $("#url").parents("from");
        $.ajax({
            url: $form.attr('action'),
            data: data,
            dataType: "JSON",
            success: function(data) {}
        });
    });
});

(function() {
    const popupsOpen = document.querySelectorAll('.popup_open');
    if (popupsOpen.length > 0) {
        for(popup of popupsOpen){
            popup.addEventListener('click', function() {
                const urlEl = document.getElementById('url');
                const data = 'url' + urlEl.value();
                const form = urlEl;
                const url = form.getAttribute('action');

            if(url && data && form) {
                fetch(url)
                .then(data)
            }
            })
        }
    }
})
