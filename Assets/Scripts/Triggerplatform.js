static var GUItest : float;  
var wallmount : GameObject;
var SecondsCounter : float;

function OnTriggerStay(other : Collider)
{
	GUItest = 1;
	SecondsCounter += (1 * Time.time) / 1000;
	if (SecondsCounter >= 10)
	{
	wallmount.renderer.enabled = false;
	wallmount.collider.enabled = false;
	}
}

function OnTriggerExit(other : Collider)
{
	SecondsCounter = 0;
	wallmount.renderer.enabled = true;
	wallmount.collider.enabled = true;
}

function OnGUI()
{
	if (GUItest == 1)
	{
	GUI.Label(Rect(Screen.width / 2 - 150,0,400,60), "WARNING: Don't stand on the platform for too long or it will fall.");
	}
}