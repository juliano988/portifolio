$(document).ready(function () {

    window.location.replace("#sec-1");

    //To avoid a bug on touch screen
    $('#about-modal , .close').click(function () {
        document.getElementById('tippy-2').setAttribute('style', 'display: initial');
    });

    $('#jf-name').click(function () {
        document.getElementById('tippy-2').setAttribute('style', 'display: none');
    });

    //-----------------------------

    $('#linkFcc1').click(function () {
        document.getElementById('fccCurriculumProjectsModal').setAttribute('style', 'transform: scale(0)');
        document.getElementById('sec-2').setAttribute('style', 'display: block');
        document.getElementById('sec-3').setAttribute('style', 'display: none');
        document.getElementById('sec-4').setAttribute('style', 'display: none');
        document.getElementById('sec-5').setAttribute('style', 'display: none');
    });

    $('#linkFcc2').click(function () {
        document.getElementById('fccCurriculumProjectsModal').setAttribute('style', 'transform: scale(0)');
        document.getElementById('sec-2').setAttribute('style', 'display: none');
        document.getElementById('sec-3').setAttribute('style', 'display: block');
        document.getElementById('sec-4').setAttribute('style', 'display: none');
        document.getElementById('sec-5').setAttribute('style', 'display: none');
    });

    $('#linkFcc3').click(function () {
        document.getElementById('fccCurriculumProjectsModal').setAttribute('style', 'transform: scale(0)');
        document.getElementById('sec-2').setAttribute('style', 'display: none');
        document.getElementById('sec-3').setAttribute('style', 'display: none');
        document.getElementById('sec-4').setAttribute('style', 'display: block');
        document.getElementById('sec-5').setAttribute('style', 'display: none');
    });

    $('#linkOthers').click(function () {
        document.getElementById('sec-2').setAttribute('style', 'display: none');
        document.getElementById('sec-3').setAttribute('style', 'display: none');
        document.getElementById('sec-4').setAttribute('style', 'display: none');
        document.getElementById('sec-5').setAttribute('style', 'display: block');
    });

    $('#linkFcc1 , #linkFcc2 , #linkFcc3 , #linkOthers').click(function () {
        setTimeout(function () { document.getElementById('arrow').setAttribute('style', '  opacity: 1; transform: scale(1);') }, 500);
        setTimeout(function () { document.getElementById('tippy-1').setAttribute('style', '  opacity: 1; transform: scale(1);') }, 500);
        setTimeout(function () { document.getElementById('sec-1').setAttribute('style', 'transform: scale(0);') }, 500);
    });

    $('#arrow').click(function () {
        setTimeout(function () {
            document.getElementById('fccCurriculumProjectsModal').setAttribute('style', 'transform: scale(1)');
            $('#fccCloseBtnModal')[0].click();
        }, 500);
        document.getElementById('sec-1').setAttribute('style', 'transform: scale(1);');
        setTimeout(function () { document.getElementById('arrow').setAttribute('style', '  opacity: 0; transform: scale(0);') }, 500);
        setTimeout(function () { document.getElementById('tippy-1').setAttribute('style', '  opacity: 0; transform: scale(0);') }, 500);
    })
});