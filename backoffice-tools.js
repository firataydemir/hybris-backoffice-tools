// ==UserScript==
// @name         Backoffice Utils
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       firataydemir
// @include      *backoffice*
// @grant        GM_setClipboard
// @grant        GM_notification
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

$(document).ready(function () {
    $('body').append('<div class="backoffice-tools active"> <ul> <li class="js-input-label-change">Alanları Göster</li><li class="custom-modal-open">Paragraf Component & Email Template View</li></ul></div><style>.backoffice-tools{position: absolute; bottom: 0; left: -150px; width: 150px; height: auto; background: #0486e0;z-index:999999;}.backoffice-tools.active{left: 0;}.backoffice-tools ul{width: 100%; margin: 0; padding: 0;}.backoffice-tools ul li{height: 50px; color: #fff; text-align: center; display: flex; justify-content: center; align-items: center;}.backoffice-tools ul li:focus{background: #151c22;}.yw-modal-collectionEditorAreaGroup{position: absolute !important; top: 50% !important; left: 50% !important; transform: translate(-50%, -50%) !important; width: 85% !important; height: 85% !important;}.z-tabs{overflow: auto !important; height: 45px; z-index: 1;}.label-color{color: #0486e0 !important; font-weight: bold;}</style>');
})
var ACC = {};
ACC.backofficeUtils = {
    el: {
        showLabelTitleBtn: '.js-input-label-change'
    },
    init: function () {
        this.events.escClose();
        this.events.showLabelTitle();
        this.events.toolOpenAndClose();
        this.events.backofficeloginAutoComplete();
        this.events.customModalOpen();
        this.events.customModalClose();
    },
    var: {
        openedLabelTitle: false,
    },
    events: {
        escClose: function () {
            $(document).on('keydown', function (event) {
                if (event.key === 'Escape') {
                    $('[title="Close"]').last().click();
                    $('#custom-modal').remove();
                }
            })

        },
        showLabelTitle: function () {
            $(document).on('click', '.js-input-label-change', function () {
                var labels = $('.yw-editorarea-tabbox-tabpanels-tabpanel').find('.z-label');
                if (ACC.backofficeUtils.var.openedLabelTitle == false) {
                    labels.each(function (index, value) {
                        var val = $(value);
                        val.attr('data-old-text', val.text());
                        var title = val.attr('title');
                        val.text(title);
                        val.addClass('label-color')
                    })
                    ACC.backofficeUtils.var.openedLabelTitle = true;
                } else {
                    labels.each(function (index, value) {
                        var val = $(value);
                        var oldText = val.attr('data-old-text');
                        val.text(oldText);
                        val.removeClass('label-color')
                    })
                    ACC.backofficeUtils.var.openedLabelTitle = false;
                }
            })
        },
        toolOpenAndClose: function () {
            $(document).on('click', '.js-tool', function () {
                if ($('.backoffice-tools').hasClass('active')) {
                    $('.backoffice-tools').removeClass('active');
                } else {
                    $('.backoffice-tools').removeClass('active');
                }
            })
        },
        backofficeloginAutoComplete: function () {
            if (location.href.includes('local:9002/backoffice')) {
                $('#loginForm [type="text"]').val('admin')
                $('#loginForm [type="password"]').val('nimda');
                $('#loginForm [type="submit"]').click();
                if ($('.yw-authoritygroup-label').length > 0) {
                    $('.yw-authoritygroup-label').parent().find('[type="button"]').click();
                }
            }
        },
        customModalOpen: function () {
            $(document).on('click', '.custom-modal-open', function () {
                var html = $('.yw-loceditor-fixed-open').parent().find('[title="Turkish"]').parent().find('textarea').text();
                if (!html) {
                    html = 'Şuanda görüntüleceyek bir component veya email template bulamıyorum Lütfen Tekrar deneyin veya Localized tabının açık olduğundan emin olun';
                }
                ACC.backofficeUtils.methods.modalOpenAndSetHtml(html);
            })
        },
        customModalClose: function () {
            $(document).on('click', '.custom-modal-close', function () {
                $('#custom-modal').remove();
            })
        },
    },
    methods: {
        modalOpenAndSetHtml: function (html) {
            $('body').append('<div id="custom-modal" style="position: absolute; width: 950px; height: 80%; top: 88.5px; left: 176px; z-index: 10000;" class="yw-modal-collectionEditorAreaGroup z-window z-window-noborder z-window-highlighted z-window-shadow"> <div id="zKGQhc2-cap" class="z-window-header z-window-header-move"> <div id="qWCPhp3" class="z-caption"> <div id="qWCPhp3-cave" class="z-caption-content">Hasan Fırat Aydemir</div><div id="qWCPgp3-close" class="z-window-icon z-window-close custom-modal-close" tabindex="0" title="Close"><i class="z-icon-times"></i></div></div></div><div id="zKGQhc2-cave" class="z-window-content js-modal-html" style="height: calc(100% - 100px);overflow-y: auto;margin: 50px;"> </div></div>')
            $('.js-modal-html').html(html);
        }
    }
}
$(document).ready(function () {
    with (ACC.backofficeUtils) {
        init();
    }
})