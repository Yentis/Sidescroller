
var lightGameObject : GameObject = new GameObject("The Light");
public static var hoverovershop1 : int;
function Start () {

	x = transform.position.x;
	y = transform.position.y;
	z = transform.position.z;
	

	lightGameObject.AddComponent(Light);


	lightGameObject.light.color = Color.blue;
	lightGameObject.light.range = 0;
	


	lightGameObject.transform.position = Vector3(x-20, y, z);	
}

	function OnMouseEnter ()
{
 
lightGameObject.light.range = 100;
hoverovershop1 = 1;

}


		function OnMouseExit ()
{
 
lightGameObject.light.range = 0;
hoverovershop1 = 0;

}


