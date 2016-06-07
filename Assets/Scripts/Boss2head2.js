var find : Transform;
var fireball : Transform;
var spawnPoint : Transform;
var openFire = false;
var startgame = false;
function Start()
{
	yield WaitForSeconds (2);
	startgame = true;
}

function Update ()
{
transform.LookAt(find);
if (startgame == true)
{
	if (openFire == true)
	{
 	Fire();
 	OpenFire  = false;
	}
}
}

function Fire()
{
var firebullet = Instantiate (fireball, spawnPoint.position, Quaternion.identity);
firebullet.rigidbody.AddForce(transform.forward * 2000);
Timer();
openFire = false;
}


function Timer ()
{
 {
  yield WaitForSeconds (3);
  openFire = true;
 }
}