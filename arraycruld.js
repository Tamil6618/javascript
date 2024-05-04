let names=["msd","virat","dhoni","kl rahul","warner","abd villers"];

var inserting=()=>

/'
;lkjhgre{
    let temp=document.getElementById('users')
    names.push(temp.value);
    alert("your value is added succesfully"+temp.value)
}

let viewpoint=()=>
{
    let hii="";
    names.map((data)=>
    {
        hii+="<tr><td>"+data+"</td><tr>"
    })
    const perfomance=document.getElementById('live');
    perfomance.innerHTML="<table align='center' style='padding: 10px 10px 5px 10px pink;'> <thead><tr><th> names</th></tr></thead><tbody>"+hii+"</tbody></table>"
} 


let updating=()=>
{
    let index=document.getElementById('users').value
    const newone=prompt("tell us what value you want update/replace"+names[index])
    names[index]=newone;
}

var deleting=()=>
{
    let temp=document.getElementById('users').value
    names=names.filter((data)=>
    {
        return data!==temp;
    })
    alert('value is deleted')
}