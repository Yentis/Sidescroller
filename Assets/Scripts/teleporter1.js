#pragma strict
var player : Transform;
var spawn : Transform;

function OnTriggerEnter (player : Collider) 
{
Debug.Log("enter");
player.transform.position.y = spawn.transform.position.y;
player.transform.position.x = spawn.transform.position.x;
player.transform.position.z = spawn.transform.position.z;
}