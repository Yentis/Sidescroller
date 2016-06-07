#pragma strict
var prefab : Transform;
function Start () {

}

function Update () {
 prefab.transform.Rotate (0,0,20* Time.deltaTime);

}