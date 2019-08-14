var Events = (function(){
    var topics = {};
    var subscribersId = -1;

    var publish = function (topic, args){
        if (!topics[topic]){
            return false;
        }

        var subscribers = topics[topic];
        var lengthSubscribers = topics ? subscribers.length : 0;
        
        while (lengthSubscribers--) {            
            subscribers[lengthSubscribers].callback(topic, args);
        }

        return this;

    };

    var subscribe = function (topic, callback){
        if (!topics[topic]) {
            topics[topic] = [];
        }
        var token = (++subscribersId).toString();
       
        topics[topic].push({
            token: token,
            callback: callback
        });
       
        return token;
    };

    var unsubscribe = function (token){
        for (var key in topics) {
            if (topics.hasOwnProperty(key)) {                
               for (var i = 0; i < topics[key].length; i++) {
                   if (topics[key][i].token === token) {                       
                       topics[key].splice(i, 1);                       
                       return token;
                   }
               }
            }
        }

        return this;
    };

    return {
        publish: publish,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    }
    
}());


var createLogger = function(topic, data) {
    console.log(topic, data);
}

var sub = Events.subscribe('new/post', createLogger);
console.log(sub);

Events.publish('new/post', {
    'title': 'Post Title',
    'text': 'text'
});

var unsub = Events.unsubscribe(sub);
console.log(unsub);

Events.publish('new/post', {
    'title': 'Post Title',
    'text': 'text'
});


