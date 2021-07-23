
    const form = document.getElementById('admin__form');
    form.addEventListener('submit',registerToken);
    async function registerToken(e){
        e.preventDefault();
        
        const result = await fetch('/duong/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },           
            body: JSON.stringify({
                name: document.getElementById('admin').value,
                password: document.getElementById('password').value
            })
        })
        .then((res) => res.json())
        .catch((err)=>{ console.log(err)})

        if(result){
            
           setCookie('token', result.data)
           window.location.href = "/";
        }        
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
