
// clear js
/* window.addEventListener('keydown', function(e) {
    console.log(e.which);
    console.log(e.key);
}); */

/* горячие клавиши по требованиям из functional kit, страница 5
e.which = e.keyCode (оба устарели)
e.code рекомендуется использовать
конкретная нажатая клавиша, например Shift:
e.which = 16 для ShiftLeft, ShiftRight
e.code=ShiftLeft, e.code=ShiftRight
в ките есть metaKey, это клавиша win или cmd. я вместо нее проставила control, как в фигме */

// $(window).keydown(function(e) { // jquery
window.addEventListener('keydown', function(e) { // clear js
    e.preventDefault(); // оно должно быть внутри каждого if (вынесла сюда, чтоб не было много текста)
    // переключение к инструментам - Tool
    if (!e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 86) {
        console.log('V = Move Tool');
    }
    if (!e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 84) {
        console.log('T = Text Tool');
    }
    if (!e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 67) {
        console.log('C = Crop Tool');
    }
    if (!e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 82) {
        console.log('R = Rectangle Tool');
    }
    if (!e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 79) {
        console.log('O = Ellipse Tool');
    }
    if (!e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 72) {
        console.log('H = Hand Tool');
    }
    // действия с элементами
    if (!e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 83) {
        console.log('S = Save Element');
    }
    if (!e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 68) {
        console.log('D = Duplicate Element');
    }
    if (!e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 8) {
        console.log('Backspace = Delete element');
    }
    if (!e.altKey && e.ctrlKey && !e.shiftKey && e.which == 71) {
        console.log('Control + G = группировка');
    }
    if (!e.altKey && e.ctrlKey && e.shiftKey && e.which == 71) {
        console.log('Control + Shift + G = разгруппировка');
    }
    if (!e.altKey && e.ctrlKey && !e.shiftKey && e.which == 90) {
        console.log('Control + Z = отмена действия');
    }
    if (!e.altKey && e.ctrlKey && e.shiftKey && e.which == 90) {
        console.log('Control + Shift + Z = повтор действия');
    }
    // перемещения элемента
    if (!e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 37) {
        console.log('Left = Move left');
    }
    if (!e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 38) {
        console.log('Up = Move up');
    }
    if (!e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 39) {
        console.log('Right = Move right');
    }
    if (!e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 40) {
        console.log('Down = Move down');
    }
    // перемещения элемента на много px (10px)
    if (!e.altKey && !e.ctrlKey && e.shiftKey && e.which == 37) {
        console.log('Shift + Left = Move left long');
    }
    if (!e.altKey && !e.ctrlKey && e.shiftKey && e.which == 38) {
        console.log('Shift + Up = Move up long');
    }
    if (!e.altKey && !e.ctrlKey && e.shiftKey && e.which == 39) {
        console.log('Shift + Right = Move right long');
    }
    if (!e.altKey && !e.ctrlKey && e.shiftKey && e.which == 40) {
        console.log('Shift + Down = Move down long');
    }
    
    // выравнивания сгруппированных элементов
    if (e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 65) {
        console.log('Alt + A = Align Left');
    }
    if (e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 87) {
        console.log('Alt + W = Align Top');
    }
    if (e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 68) {
        console.log('Alt + D = Align Right');
    }
    if (e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 83) {
        console.log('Alt + S = Align Bottom');
    }
    // выравнивания по центру, вертикали
    if (e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 86) {
        console.log('Alt + V = Align Vertical Spacing');
    }
    if (e.altKey && !e.ctrlKey && !e.shiftKey && e.which == 72) {
        console.log('Alt + H = Align Horizontal Spacing');
    }
    if (e.altKey && e.ctrlKey && e.shiftKey && e.which == 86) {
        console.log('Control + Shift + Alt + V = Distribute Vertical Spacing');
    }
    if (e.altKey && e.ctrlKey && e.shiftKey && e.which == 72) {
        console.log('Control + Shift + Alt + H = Distribute Horizontal Spacing');
    }
    // прочее
    // тут изменила по сравнению с китом - у них там 2 S, поэтому тут добавила Control
    if (!e.altKey && e.ctrlKey && !e.shiftKey && e.which == 83) {
        console.log('Control + S = Open Shortcuts');
    }

    console.log(e);
    // console.log(e.key +' = '+ e.which);
    // console.log(e.key);
});