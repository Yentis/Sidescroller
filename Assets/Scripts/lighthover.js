// Make a game object
var lightGameObject : GameObject = new GameObject("The Light");

function Start () {

	x = transform.position.x;
	y = transform.position.y;
	z = transform.position.z;
	
	// Add the light component
	lightGameObject.AddComponent(Light);

	// Set color and position
	lightGameObject.light.color = Color.red;
	lightGameObject.light.range = 0;
	

	// Set the position (or any transform property) after
	// adding the light component.
	lightGameObject.transform.position = Vector3(x, y, z);	
}


	function OnMouseEnter ()
{
 
lightGameObject.light.range = 100;

}


		function OnMouseExit ()
{
 
lightGameObject.light.range = 0;

}