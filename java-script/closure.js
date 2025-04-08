var c="haridas"
function outer(){
    var a="a is outer variable ";
    console.log(a);
    // console.log(b);
    function inner(){
        var b="b is inner varable";
        console.log(b);
        console.log(a);
        console.log(c);
    }
    inner();
}
outer( );
