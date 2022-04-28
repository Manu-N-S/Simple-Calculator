function btnclick(val)
{
    document.getElementById('Display-screen').value=document.getElementById('Display-screen').value+val;
}
function cleartext()
{
    document.getElementById('Display-screen').value="";
}
function ansbtn()
{
  var text=document.getElementById('Display-screen').value;
  var result= eval(text);
  document.getElementById('Display-screen').value=result;

}