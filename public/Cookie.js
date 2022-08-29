function setcookie(name, value)
{
    let date = new Date();
    date.setDate(date.getDate() + 10);
    document.cookie = name + "=" + value + ";expires=" + date.toString();

 }

function getcookie(name)
{
    let cookie = document.cookie;
    let cookies = cookie.split(";");
    for(let i = 0; i < cookies.length; i++)
    {
        let mycookie = cookies[i].split("=");

        if(mycookie[0].trim() == name)
            return mycookie[1];
    }
    return "";
}

function clearcookie(name)
{
    let date = new Date();
    date.setDate(date.getDate() - 10);
    document.cookie = name + "=;expires=" + date.toString();
}