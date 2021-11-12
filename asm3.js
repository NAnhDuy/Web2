var stt = 0;
$(document).ready(function() {
    $('#join').click(function() {
        var uname = document.getElementById('name').value;
        var math = document.getElementById('math').value;
        var phy = document.getElementById('physical').value;
        var che = document.getElementById('chemistry').value;
        if (uname == ""||math ==""||phy==""||che=="") {
            alert("Hãy điền đầy đủ thông tin."); 
        } else if(isNaN(math)||isNaN(phy)||isNaN(che)||math>10||phy>10||che>10||math<0||phy<0||che<0) {
            alert("Hãy điền đúng số điểm.");
        } else {
        stt +=1;
        $('#name').val('');
        $('#math').val('');
        $('#physical').val('');
        $('#chemistry').val('');
        $('#tab').append('<tr><td>' + stt +'</td></tr>');
        $('#tab tr:last-child').append('<td>' + uname +'</td>');
        $('#tab tr:last-child').append('<td>' + math +'</td>');
        $('#tab tr:last-child').append('<td>' + phy +'</td>');
        $('#tab tr:last-child').append('<td>' + che +'</td></tr>');
        $('#tab tr:last-child').append('<td>?</td>');
        }
    });

    $('#tinhdiem').click(function() {
            $('tr').each(function() {
                let toan = parseFloat($(this).children('td:nth-child(3)').html());
                let ly = parseFloat($(this).children('td:nth-child(4)').html());
                let hoa = parseFloat($(this).children('td:nth-child(5)').html());
                let tinh = ((toan+ly+hoa)/3).toFixed(1);
                $(this).children('td:last-child').html(tinh);
            });
    })

    $('#hsg').click(function() {
        $('#tab tr').each(function() {
            if(parseFloat($(this).children('td:last-child').html()) >= 8) {
                $(this).css({"background-color": "red", "color": "white"});
            } else {}
        });
    });
});




