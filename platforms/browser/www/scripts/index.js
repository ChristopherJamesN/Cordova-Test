var app = {
  // Application Constructor
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function () {
    app.receivedEvent('deviceready');
    StatusBar.overlaysWebView(false);
    StatusBar.backgroundColorByName('black');

    // Here, we redirect to the web site.
    var targetUrl = 'https://rails-news-feed-jt3432sekq-uc.a.run.app/';
    var bkpLink = document.getElementById('bkpLink');
    console.log('attempting to redirect to ' + targetUrl);
    console.log('bkplink attribute is ' + bkpLink);
    bkpLink.setAttribute('href', targetUrl);
    /*
    bkpLink.text = targetUrl;
    window.location.replace(targetUrl);
    */
  },
  // Note: This code is taken from the Cordova CLI template.
  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  },
};

app.initialize();
