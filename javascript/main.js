$(document).ready(function () {
    let formIsOpened = false;

    $('.showForm').click(function () {
        if (!formIsOpened) {
            $('.form-task').show(500);
            $('.showForm').text('-');
            formIsOpened = true;
        } else {
            $('.form-task').hide(500);
            $('.showForm').text('+');
            formIsOpened = false;
        }
    });

    $('.form-task').on('submit', function (e) {
        e.preventDefault();
        let taskValue = $('#taskfield').val().trim();


        if ($('.tasks').text().trim() === "Não há tarefas adicionadas.") {
            $('.tasks').empty();
        }


        let exists = false;
        $('.task-list').each(function () {
            if ($(this).text().trim() === taskValue) {
                alert('Já existe essa tarefa na lista.');
                exists = true;
                return false; 
            }
        });

        if (!exists) {
            $('.tasks').append(
                `<div class='task-list'>${taskValue}</div>`
            );
        }

        $('#taskfield').val('');
    });


    $('.tasks').on('click', '.task-list', function () {
        $(this).toggleClass('striked');
    });
});
