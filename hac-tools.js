// ==UserScript==
// @name         Hac Utils
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       firataydemir
// @include      *hac*
// @grant        GM_setClipboard
// @grant        GM_notification
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @run-at       document-body
// ==/UserScript==

$('body').append(`
<style>
  #mainContainer {
    width: 80%;
  }

  #mainContainer header {
    width: 100%;
  }

  #sidebar.span-6.last {
    display: none;
  }

  #content.prepend-top.span-17.colborder {
    width: 100%;
  }

  #nav_console {
    width: 100%;
  }

  #buttonSubmit1 {
    width: 100%;
    height: 50px;
  }

  nav {
    width: 100% !important;
  }

  #textarea-container {
    height: 100% !important;
    min-height: 250px !important;
    width: 99% !important;
  }
   #props tbody tr td:last-child {
        width: 100%;
    }

    #props tbody tr td:last-child input {
        width: calc(100% - 75px);
    }

    #props_filter {
        width: 100%;
        display: flex;
    }

    #props_filter label {
        text-align: center;
        width: 100%;
        font-size: 18px;
    }

    #props_filter label input {
        width: calc(100% - 25px);
        margin-bottom: 25px;
        height: 45px;
    }
    [data-validateurl="/hac/console/impex/import/validate"] #textarea-container {
        height: 60vh !important;
    }
</style>
`);