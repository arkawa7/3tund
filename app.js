(function(){
  "use strict";


  var Moosipurk = function(){

    // SINGLETON PATTERN (4 rida)
    if(Moosipurk.instance){
      return Moosipurk.instance;
    }
    Moosipurk.instance = this; // this viitab moosipurgile

    this.routes = Moosipurk.routes;

    console.log(this);
    //console.log('moosipurgi sees');

    // KÕIK MUUTUJAD, mis on üldised ja muudetavad
    this.currentRoute = null; // hoian meeles mis lehel olen (home-view, ...)



    //panen rakenduse tööle
    this.init();
  };

  // kirjeldatud kõik lehed
  Moosipurk.routes = {
    "home-view": {
      render: function(){
        // käivitan siis kui jõuan lehele
        console.log('JS avalehel');

        // kui jõuan avalehele siis käivitub timer, mis hakkab trükkima kulunud sekundeid
        // divi sisse #counter
        // hakkab 0st

      }
    },
    "list-view": {
      render: function(){
        console.log('JS loendi lehel');
      }
    },
    "manage-view": {
      render: function(){
        console.log('JS halduse lehel');
      }
    }
  };

  //kõik moosipurgi funktsioonid tulevad siia sisse
  Moosipurk.prototype = {
    init: function(){
      console.log('rakendus käivitus');
      // Siia tuleb esialgne loogika

      window.addEventListener('hashchange', this.routeChange.bind(this));

      //vaatan mis lehel olen, kui ei ole hashi lisan avalehe
      console.log(window.location.hash);
      if(!window.location.hash){
        window.location.hash = "home-view";
      }else{
        //hash oli olemas, käivitan routeChange fn
        this.routeChange();

      }


      // hakka kuulama hiireklõpse
      this.bindMouseEvents();
    },
    bindMouseEvents: function(){
      document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));
    },
    addNewClick: function(event){
      //console.log(event);
      this.click_count++;
      console.log(this.click_count);

    },
    routeChange: function(event){

      this.currentRoute = window.location.hash.slice(1);

      // kas leht on olemas
      if(this.routes[this.currentRoute]){
        //jah
        console.log('>>> ' + this.currentRoute);
        //käivitan selle lehe jaoks ettenähtud js
        this.routes[this.currentRoute].render();
      }else{
        // 404?
        console.log('404');
        window.location.hash = 'home-views';
      }

    }
  };


  window.onload = function(){
    var app = new Moosipurk();
  };

})();
