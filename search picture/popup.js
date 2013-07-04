// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(str) {
  chrome.tabs.executeScript(null,
      {code:"var img = '"+str+"'; var imgs = document.querySelectorAll('img'); for(var i = 0, len = imgs.length; i < len; i++){if(imgs[i].src == img){if(imgs[i].getBoundingClientRect().top){imgs[i].style.backgroundColor = 'red'; document.body.scrollTop = document.body.scrollTop + imgs[i].getBoundingClientRect().top; return;}else{var tempNode = imgs[i].parentNode, isNone = getComputedStyle(tempNode,null)['display'], target; while(isNone != 'none'){tempNode = tempNode.parentNode; isNone = getComputedStyle(tempNode,null)['display']; } target = tempNode.parentNode; target.style.backgroundColor = 'red'; document.body.scrollTop = document.body.scrollTop + target.getBoundingClientRect().top; return;} }}alert('找不到搜索的图片，有可能是此页面根本没此图片')"});
  window.close();
}

function trim(s){
     return s.replace(/^[\s\xa0\u3000]+|[\u3000\xa0\s]+$/g, "");
}

document.addEventListener('DOMContentLoaded', function () {
  var go = document.querySelector('#go');
  var input = document.querySelector('#imgSrc');

  input.focus();

  go.addEventListener('click',function(){
    var v = trim(input.value);
    click(v);
  });
});
