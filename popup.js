var settings = {
    "async": true,
    "crossDomain": true,

    "url": "http://192.168.1.102/YamahaRemoteControl/ctrl",
    "method": "POST",
    "headers": {
        "accept": "*/*",
        "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
    },

}

$('.inputChange').click(function(){
    var settings = {
        "async": true,
        "crossDomain": true,

        "url": "http://192.168.1.102/YamahaRemoteControl/ctrl",
        "method": "POST",
        "headers": {
            "accept": "*/*",
            "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        "data": this.value

    }
    $.ajax(settings).done(function (response) {
//        alert('sent');
        console.log(response);
    });
})
