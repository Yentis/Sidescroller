var player : Transform;

function Update ()
{
targetPosition = new Vector3(player.position.x,player.transform.position.y,player.position.z);
this.transform.LookAt(targetPosition);
}