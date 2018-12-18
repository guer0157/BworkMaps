let app={
    init: function(){

        fetch('http://allengoo.com/php/bottleworksform2.php')
        .then(response=>{
            console.log(response);
            return response.json()
        })
        .then(data=>{
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })

    },
    con: function(da){
        console.log(da)
    }
}

document.addEventListener('DOMContentLoaded', app.init)