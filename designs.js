// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    var rows = parseInt($('#inputHeight').val());
    var cols = parseInt($('#inputWeight').val());
    console.log('Hi. Making ' + rows + ' by ' + cols + ' grid.');

    var grid = $('#pixelCanvas');

    grid.empty();
    grid.append('<tbody></tbody>'); // Need a tbody for the selector on line 25 to work.

    for (var i = 0; i < rows; i++) {
        var trHtml = '<tr>';

        for (var j = 0; j < cols; j++) {
            trHtml += '<td id="cell_' + i + '_' + j + '" onclick="gridClick(' + i + ', ' + j + ')"></td>';
        }

        trHtml += '</tr>';
        $('#pixelCanvas > tbody:last-child').append(trHtml);
    }

    return false; // Don't refresh the page and *actually* submit the form.
}

function gridClick(row, col) {
    console.log('Clicked row ' + row + ', column ' + col + '.');
    var color = $('#colorPicker').val();
    console.log('Setting color to ' + color);
    $('#cell_' + row + '_' + col).css('background-color', color);
}

// Intercept the signal for the submit button.
$("#sizePicker").submit(makeGrid);
