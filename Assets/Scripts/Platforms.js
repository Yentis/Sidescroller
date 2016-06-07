var platform : GameObject;
var player1 : Transform;


function Start(){
	platform.collider.enabled = false;
}
function OnTriggerEnter(player1 : Collider)
{
	platform.collider.enabled = true;
}

function OnTriggerExit(player1 : Collider)
{
	platform.collider.enabled = false;
}