
var createLogger = function (event, data) {
    console.log(event.type, data);
}


// Equivalent to subscribe(topic, callback)
// $(document).on("topic", function () {
//     //code
// });
$(document).on("topic", createLogger);

// Equivalent to publish(topicName)
$(document).trigger("topic", {
    'topic': 'topic',
    'data': 'mydata'
});
//result: topicName {topic: "topicname", data: "mydata"}

// Equivalent to unsubscribe(topicName)
$(document).off("topic");
