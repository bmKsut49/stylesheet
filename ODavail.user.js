// ==UserScript==
// @name          OverDrive Availability
// @version       1.01
// @namespace     Nowhere
// @description   Adds textarea with OverDrive library Availability
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_deleteValue
// @grant         GM_xmlhttpRequest
// @grant         GM_openInTab
// @grant         unsafeWindow
// @grant         GM.getValue
// @grant         GM.setValue
// @grant         GM.deleteValue
// @grant         GM.xmlHttpRequest
// @grant         GM.openInTab
// @include       http://www.overdrive.com/media/*
// @include       https://www.overdrive.com/media/*
// @require       https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require       https://raw.githubusercontent.com/Riim/object-entries-polyfill/master/index.js
// @icon           data:image/png;base64,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
// @connect       contentreserve.com
// ==/UserScript==


/*
This helper script bridges compatibility between the Greasemonkey 4 APIs and
existing/legacy APIs.  Say for example your user script includes

    // @grant GM_getValue

And you'd like to be compatible with both Greasemonkey 3 and Greasemonkey 4
(and for that matter all versions of Violentmonkey, Tampermonkey, and any other
user script engine).  Add:

    // @grant GM.getValue
    // @require https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js

And switch to the new (GM-dot) APIs, which return promises.  If your script
is running in an engine that does not provide the new asynchronous APIs, this
helper will add them, based on the old APIs.

If you use `await` at the top level, you'll need to wrap your script in an
`async` function to be compatible with any user script engine besides
Greasemonkey 4.

    (async () => {
    let x = await GM.getValue('x');
    })();
*/

if (typeof GM == 'undefined') {
  GM = {};
}

if((typeof GM_openInTab) == "undefined") {
    this.GM_openInTab = function(url) { return window.open(url, "_blank"); };
}

if (typeof GM_addStyle == 'undefined') {
  this.GM_addStyle = (aCss) => {
    'use strict';
    let head = document.getElementsByTagName('head')[0];
    if (head) {
      let style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.textContent = aCss;
      head.appendChild(style);
      return style;
    }
    return null;
  };
}

if (typeof GM_registerMenuCommand == 'undefined') {
  this.GM_registerMenuCommand = (caption, commandFunc, accessKey) => {
    if (!document.body) {
      console.error('GM_registerMenuCommand got no body.');
      return;
    }
    let contextMenu = document.body.getAttribute('contextmenu');
    let menu = (contextMenu ? document.querySelector('menu#' + contextMenu) : null);
    if (!menu) {
      menu = document.createElement('menu');
      menu.setAttribute('id', 'gm-registered-menu');
      menu.setAttribute('type', 'context');
      document.body.appendChild(menu);
      document.body.setAttribute('contextmenu', 'gm-registered-menu');
    }
    let menuItem = document.createElement('menuitem');
    menuItem.textContent = caption;
    menuItem.addEventListener('click', commandFunc, true);
    menu.appendChild(menuItem);
  };
}

Object.entries({
  'log': console.log,
  'info': GM_info,
}).forEach(([newKey, old]) => {
  if (old && (typeof GM[newKey] == 'undefined')) {
    GM[newKey] = old;
  }
});


Object.entries({
  'GM_addStyle': 'addStyle',
  'GM_deleteValue': 'deleteValue',
  'GM_getResourceURL': 'getResourceUrl',
  'GM_getValue': 'getValue',
  'GM_listValues': 'listValues',
  'GM_notification': 'notification',
  'GM_openInTab': 'openInTab',
  'GM_registerMenuCommand': 'registerMenuCommand',
  'GM_setClipboard': 'setClipboard',
  'GM_setValue': 'setValue',
  'GM_xmlhttpRequest': 'xmlHttpRequest',
}).forEach(([oldKey, newKey]) => {
  let old = this[oldKey];
  if (old && (typeof GM[newKey] == 'undefined')) {
    GM[newKey] = function() {
        try {
          return Promise.resolve(old(...[].slice.call(arguments)));
        } catch (e) {
          return Promise.reject(e);
        }
    };
  }
});


//$ = unsafeWindow.jQuery;

function GM_XHR() {
    this.type = null;
    this.url = null;
    this.async = null;
    this.username = null;
    this.password = null;
    this.status = null;
    this.headers = {};
    this.readyState = null;

    this.abort = function() {
        this.readyState = 0;
    };

    this.getAllResponseHeaders = function(name) {
      if (this.readyState!=4) return "";
      return this.responseHeaders;
    };

    this.getResponseHeader = function(name) {
      var regexp = new RegExp('^'+name+': (.*)$','im');
      var match = regexp.exec(this.responseHeaders);
      if (match) { return match[1]; }
      return '';
    };

    this.open = function(type, url, async, username, password) {
        this.type = type ? type : null;
        this.url = url ? url : null;
        this.async = async ? async : null;
        this.username = username ? username : null;
        this.password = password ? password : null;
        this.readyState = 1;
    };

    this.setRequestHeader = function(name, value) {
        this.headers[name] = value;
    };

    this.send = function(data) {
        this.data = data;
        var that = this;
        // http://wiki.greasespot.net/GM_xmlhttpRequest
        GM.xmlHttpRequest({
            method: this.type,
            url: this.url,
            headers: this.headers,
            data: this.data,
            onload: function(rsp) {
                // Populate wrapper object with returned data
                // including the Greasemonkey specific "responseHeaders"
                for (var k in rsp) {
                    that[k] = rsp[k];
                }
                // now we call onreadystatechange
                that.onreadystatechange();
            },
            onerror: function(rsp) {
                for (var k in rsp) {
                    that[k] = rsp[k];
                }
            }
        });
    };
};

function sort_by (field, reverse, primer){

   var key = primer ?
       function(x) {return primer(x[field])} :
       function(x) {return x[field]};

   reverse = [-1, 1][+!!reverse];

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     }

}

function findUUID(selector, attr, prefix, suffix) {
    var content = $(selector).attr(attr);
    content = content ? content.split(prefix)[1] : content;
    return content ? content.split(suffix)[0] : content;
}

$(document).ready(function() {

console.log('OverDriveBB loaded');

var windowHostname = window.location.hostname;
var titleReserveID = $('meta[property="od:id"]').attr('content') ||
                     findUUID('a[href*="samples.overdrive.com/?crid="]','href','?crid=','&');
var  ISBN          = $('td:contains("ISBN:")').next().text();
var  ASIN          = $('td:contains("ASIN:")').next().text();


function executeOverdrive() {

  console.log('executing at overdrive');

  // Assigning default settings if none exist (first run)
  GM.getValue('settingsExist').then( (val) => (typeof val === 'undefined') ? assignDefaultSettings() : undefined ).then( function(){

  // Rewrite textarea when user changes checkboxes
  $('#actionDiv input[type="checkbox"]').change(function()
  {
    writeBBCode();
    console.log('changed checkbox');
  });

  // Magic - #todo: split writing and generation?
  function writeBBCode()
  {
    bbcodeLibraries.empty();

    bbCodeString = '';

    bbCodeString += '[url=' + window.location.href + ']Overdrive Listing[/url]';
    if (ISBNOrASIN) bbCodeString+=' ('+ISBNOrASIN+')';
    bbCodeString += '\n\n[b]Overdrive availability (' + libraryProviders.length + ')[/b]\n';

    for (var j = 0; j < libraryProviders.length; j++)
    {
      bbCodeString += '[url=' + libraryProviders[j].href.replace(/[{}]/g, '') + ']' + libraryProviders[j].text + '[/url]\n';
    }

    if ($('#actionDiv input[type="checkbox"]').is(':checked'))
    {
      bbCodeString += '\n[b]E-book stores[/b]';
      $('#actionDiv input[type="checkbox"]:checked').each(function(){
              bbCodeString += '\n[url='+ $(this).next().prop('href') +
                              ']'+$(this).next().text().trim()+'[/url]';
      });
    }

    if (bookDescription)
    {
      bbCodeString += '\n\n[quote]' + bookDescription  + '\n[/quote]';
    }
    bbcodeLibraries.text(bbCodeString);
  }

  writeBBCode();
  });
}

function addDocNum(lbl, xml, tag, url, fallback) {
    if (lbl.next().is('dd')) lbl = lbl.next();
    dn = xml.find('td:contains("'+tag+'"):last').next().text().trim();
    if (dn || fallback) {
        if (!dn) {tag=''; dn='More info '};
        lbl.append(' ('+tag+' <a href="'+url+'">'+dn+'</a>)');
    }
    return dn=='More info ' ? null: dn;
}

function fetchISBNorASIN(lbl, fmtCode) {
      var isbn, asin;
      console.log("Looking up ISBN/ASIN for format "+fmtCode);
      var url = 'http://www.contentreserve.com/TitleInfo.asp?ID={'+titleReserveID+'}&Format='+fmtCode;
      return $.ajax({
        url:url,
        success:function(xml){
            console.log("got page for format "+fmtCode);
            xml = $(xml);
            ISBN = (isbn = addDocNum(lbl, xml, 'ISBN:', url)) || ISBN;
            ASIN = (asin = addDocNum(lbl, xml, 'ASIN:', url, !isbn)) || ASIN;
            console.log("ASIN:",asin," ISBN:", isbn);
        },
        dataType:'text',
        xhr: function(){return new GM_XHR();}
      });
}

if (windowHostname === 'www.overdrive.com' && titleReserveID)
{
    // Fetch library list and ISBN/ASIN before adding request box to page
    var todo = [];
    var formatCodes = {WMA:25, MP3:425, EPUB:410, PDF:50, Kindle:420};
    for (var fmt in formatCodes) {
      var lbl = $('ul.formats-list li:contains("'+fmt+' ")');
      if (lbl.length)
        todo.push(fetchISBNorASIN(lbl,formatCodes[fmt]));
    };
    todo.push(
      $.post(
          // 'https://www.overdrive.com/_ajax/libraries-for-media?mediaId=&q=e' +
          'https://www.overdrive.com/_Ajax/libraries-for-media?q=+&mediaId=' +
          location.pathname.split('/')[2] //+'&postion=30,-50'
      ).done(function(libs){
        var libraryProviders = [];
        libs = libs.aaData;
        unsafeWindow.libdata = libraryProviders;
        var all = {}, counts = {}, t;
        for (var i = 0; i<libs.length; i++) {
            all[t = libs[i].libraryUrl] = libs[i].consortium;
            counts[t] ? counts[t]++ : counts[t] = 1;
        }
        for (i in all) libraryProviders.push({
          href: "http://" + i + "/ContentDetails.htm?id=" + titleReserveID,
          text: all[i] //+" ("+counts[i]+")"
        });
        libraryProviders.sort(sort_by('text', true, function(x){return x.toLowerCase()}));
        var liblist = $(
            '<h3 class="folding-panel__label">Library Availability (' + libraryProviders.length +
            ')' + ( libs.length === 1000 ? ' [PARTIAL]' : '') +
            '<span class="folding-panel__toggle"><span class="icon icon-arrow-right"></span></span></h3>'
        );
        liblist.click(function(){
          $(this).parent().toggleClass("folding-panel--open").toggleClass("folding-panel--closed");
        });
        liblist = $('<div id="obb-liblist" class="folding-panel folding-panel--closed"></div>').append(liblist).appendTo('.title-page__description');
        liblist = $('<div class="folding-panel__content"></div>').appendTo(liblist);
        liblist = $('<ul></ul>').appendTo(liblist);
        for (var j = 0; j < libraryProviders.length; j++) {
          $('<li class="on"></li>').append(
              $('<a class="provider"></a>').prop('href',libraryProviders[j].href).text(libraryProviders[j].text)
          ).appendTo(liblist);
        }
        console.log(liblist.length, libraryProviders.length);
        $(document).ajaxStop(function(e) {
             if ($('#acquire-bar *').length)
                 $('#acquire-bar .folding-panel, #acquire-bar a.btn--inactive:contains(Unavailable)').last().before($('#obb-liblist'));
        });
    }));
    console.log("todo",todo.length);
    $.when.apply($,todo).done(executeOverdrive);
};


});
