static var dooropen : float = 0;
var weapon : GameObject;
var spawnPoint : Transform;
static var main_weapon : GameObject;
var playerone : Transform;

function Update ()
{
	if (GameObject.FindGameObjectWithTag("Enemy") == null)
	{
	
	Wait();
	
	if (dooropen == 1 && Input.GetKey("e"))
	{
	for(var destroy : GameObject in GameObject.FindGameObjectsWithTag("Door"))
    {
    destroy.SetActive(false);
    }
    dooropen = 0;
	}
	}
}

function Wait()
{
	weapon.gameObject.renderer.enabled = true;
	PlayerShooting.Weapon_ID = 1;
	
	weapon.transform.localRotation = spawnPoint.rotation;
	weapon.transform.rotation = spawnPoint.rotation;
	weapon.transform.position = spawnPoint.position;
	weapon.transform.parent = spawnPoint;
}