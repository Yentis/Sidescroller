var cratelargeb : Transform;
var cratelarge : Transform;
var barrellarge : Transform;
var cratea : Transform;
var spawn1 : Transform;
var spawn2 : Transform;
var spawn3 : Transform;
var spawn4 : Transform;
var RandomNumber : double; 
var spawneron : int = 1;

function Start()
{
 RandomNumber = Random.value;
}

function FixedUpdate()
{


	if(RandomNumber <= 0.25 && spawneron == 1)
	{
		Wait();
		Instantiate(cratelargeb, spawn1.position, spawn1.rotation);
		RandomNumber = Random.value;
		spawneron = 0;
	}
	
	if(RandomNumber <= 0.5 && RandomNumber > 0.25 && spawneron == 1)
	{
		Wait();
		Instantiate(cratelarge, spawn2.position, spawn2.rotation);
		RandomNumber = Random.value;
		spawneron = 0;
	}
	
	if(RandomNumber <= 0.75 && RandomNumber > 0.5 && spawneron == 1)
	{
		Wait();
		Instantiate(barrellarge, spawn3.position, spawn3.rotation);
		RandomNumber = Random.value;
		spawneron = 0;
	}
	
	if(RandomNumber <= 1 && RandomNumber > 0.75 && spawneron == 1)
	{
		Wait();
		Instantiate(cratea, spawn4.position, spawn4.rotation);
		RandomNumber = Random.value;
		spawneron = 0;
	}
}
function Wait()
{
	var randomwait = Random.value;
	if ((randomwait * 5) > 2)
	{
		yield WaitForSeconds(2);
	}
	else yield WaitForSeconds(randomwait * 5);
	spawneron = 1;
}