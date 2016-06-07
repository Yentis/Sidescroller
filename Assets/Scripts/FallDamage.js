var player : Transform;
var dead = 0;

function Update () {
if (player.position.y <= -40)
{
Destroy(player.gameObject);
PlayerShooting.health -= 100;
}
}