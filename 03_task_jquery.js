/*Напишите аналог кода на чистом js
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
});*/

(function() {
    const popupsOpen = document.querySelectorAll('.popup_open');

    if (popupsOpen.length > 0) {
        for (popup of popupsOpen) {
            popup.addEventListener('click', function() {
                const $input = document.getElementById('url');
                const $form = $input.closest('.from');
                const data = 'url=' + $input.value;
                const url = $form.getAttribute('action');

                if (url && data) {
                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }).then(response => {})
                    .catch(error => console.error(error))
                }
            })
        }
    }
})();
