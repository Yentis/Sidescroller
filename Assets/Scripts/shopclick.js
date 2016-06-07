#pragma strict

var object : Transform;
var nonrenderedcube : GameObject;
function Start () {
}

function Update () {
if (shopligt.hoverovershop1 == 1) {
Debug.Log("yay");
if(Input.GetButton("Fire1"))
{
Camera.mainCamera.transform.position.x  = object.position.x - 8;
Camera.mainCamera.transform.position.y  = object.position.y + 10;
Camera.mainCamera.transform.position.z  = object.position.z - 15;


nonrenderedcube.transform.position.x = 61.66529;
nonrenderedcube.transform.position.y = 10.22851;
nonrenderedcube.transform.position.z = -638.3425;
}	
}
}
