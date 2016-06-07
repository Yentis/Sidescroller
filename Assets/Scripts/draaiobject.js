#pragma strict
var prefab : Transform;
function Start () {
prefab.rotation.x = 270;
prefab.rotation.z = 0;
}

function Update () {
 prefab.transform.Rotate (0,5,0* Time.deltaTime);
}