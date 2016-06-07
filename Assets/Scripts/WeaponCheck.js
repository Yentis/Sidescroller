var spawnPoint : Transform;
var weapon : GameObject;
var player1 : Transform;

function OnTriggerEnter (player1 : Collider)
{
	Debug.Log("Trigger");
	if (PlayerShooting.Weapon_ID == 0 && AttackTrigger.dooropen == 1)
	{
		ChangeID();
	}
}

function ChangeID ()
{
	PlayerShooting.Weapon_ID = 1;
	var gun : GameObject = Instantiate(weapon, spawnPoint.position, spawnPoint.rotation);
	gun.transform.parent = spawnPoint;
	gun.renderer.enabled = true;
	Destroy(AttackTrigger.main_weapon);
}