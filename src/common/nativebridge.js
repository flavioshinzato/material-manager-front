/* eslint-disable */
const NativeBridge = {
  jsSchema: 'vue-template',
  callbacks: {},
  callbacksCount: 1,

  // Automatically called by native layer when a result is available
  resultForCallback: function(callbackId, resultArray) {
    try {
      var callback = this.callbacks[callbackId];
      if (!callback)
        { return; }

      callback.apply(null, resultArray);
    } catch(err) {
      console.log(err);
    }
  },

  // Called to send some event to front application
  triggerEvent: function(eventId, resultArray) {
    if(resultArray == undefined) {
      resultArray = {};
    }
    var event = new CustomEvent(eventId, { detail: resultArray });
    document.getElementsByTagName('body')[0].dispatchEvent(event);
  },

  // Use this in javascript to request native objective-c code
  // functionName : string (I think the name is explicit :p)
  // args : array of arguments
  // callback : function with n-arguments that is going to be called when the native code returned
  call: function(functionName, args, callback) {

    var hasCallback = callback && typeof callback === 'function';
    var callbackId = hasCallback ? this.callbacksCount++ : 0;

    if (hasCallback){
      this.callbacks[callbackId] = callback;
    }

    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", this.jsSchema + ":" + functionName + ":" + callbackId+ ":" + encodeURIComponent(JSON.stringify(args)));
    // For some reason we need to set a non-empty size for the iOS6 simulator...
    iframe.setAttribute("height", "1px");
    iframe.setAttribute("width", "1px");
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
  },

  directCall: function(functionName, args, callback) {

    var hasCallback = callback && typeof callback === 'function';
    var callbackId = hasCallback ? this.callbacksCount++ : 0;

    if (hasCallback){
      this.callbacks[callbackId] = callback;
    }

    window.location = this.jsSchema + ":" + functionName + ":" + callbackId+ ":" + encodeURIComponent(JSON.stringify(args))

    // var iframe = document.createElement("IFRAME");
    // iframe.setAttribute("src", this.jsSchema + ":" + functionName + ":" + callbackId+ ":" + encodeURIComponent(JSON.stringify(args)));
    // // For some reason we need to set a non-empty size for the iOS6 simulator...
    // iframe.setAttribute("height", "1px");
    // iframe.setAttribute("width", "1px");
    // document.documentElement.appendChild(iframe);
    // iframe.parentNode.removeChild(iframe);
    // iframe = null;
  },

  // App's users agent's
  isDevice: function() {
    return /[VueTemplateAndroid|VueTemplateIos]$/.test(navigator.userAgent);
  },

  isAndroid: function() {
    return /VueTemplateAndroid$/.test(navigator.userAgent);
  },

  isIOS: function() {
    return /VueTemplateIos$/.test(navigator.userAgent);
  }
};
export default NativeBridge;
