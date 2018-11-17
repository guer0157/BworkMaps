let app={
    init: function(){
        let opt={
            mode:'cors',
            method:'GET'
        }
        fetch('http://lenczes.edumedia.ca/mad9137/a4/respond.php')
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