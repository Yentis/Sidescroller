    //Variabelen
    var player : Transform;
    var speed = 5.0;
    var chaseRange = 11.0;
    var dieRange = 1.7;
    var attackspeed : float = 2;
    var nextattack = 0.0;
    var Viewrange : float = 0;
    static var hitPoints = 1000.0;
    var damage : float;
    var hasdied : float = 0;
    var EnemyID : int;
    var bullet : GameObject;
	var spawnPoint : Transform;
	var spawnPoint2 : Transform;
    private var controller : CharacterController;
	var explosion : Transform;
	var GUItest : int = 1;
    
    //Doe dit wanneer script geactiveerd wordt.
    function Start()
    {
    //Controller voor de speler nemen.
    controller = GetComponent(CharacterController);
    }
    
    //Doe dit elke frame
    function Update()
    {
if(Input.GetKeyDown(KeyCode.M)){
hitPoints = 20;
}
	 //Zorgen dat dit object enkel in de Z-axis kan bewegen.
    transform.position.x = 0;
    transform.rotation.x = 0;
    //De range is de afstand tussen de speler en dit object.
    if (GameObject.FindGameObjectWithTag("Player"))
    {
    var range = Vector3.Distance(player.position, transform.position);
    }
    if (PlayerShooting.health < 1)
	{
	range = 50;
	}
	else
	{
	attackspeed = 3;
	if (range <= 20 && hasdied == 0 && range > 8)
    {
    var targetRotation = Quaternion.LookRotation(player.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, speed * Time.deltaTime);
    	if (Time.time > nextattack)
    	{
    	var nBullet = Instantiate(bullet, spawnPoint.position -Vector3(0,0,0), spawnPoint.rotation);
    	nBullet.rigidbody.velocity = spawnPoint.TransformDirection(Vector3(0,0,70));
    	var direction = spawnPoint.TransformDirection(Vector3(0,0,-110));
    	var hit : RaycastHit;
    	var localOffset = spawnPoint.position + (transform.up);
    	if (Physics.Raycast (localOffset, direction + Vector3(0,0,10), hit, 300))
    	{
    	hit.collider.SendMessageUpwards("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver);
		}
    	PlayerShooting.health -= 5;
    	
		nBullet = Instantiate(bullet, spawnPoint2.position -Vector3(0,0,0), spawnPoint2.rotation);
    	nBullet.rigidbody.velocity = spawnPoint2.TransformDirection(Vector3(0,0,70));
    	direction = spawnPoint2.TransformDirection(Vector3(0,0,-110));
    	localOffset = spawnPoint.position + (transform.up);
    	if (Physics.Raycast (localOffset, direction + Vector3(0,0,10), hit, 300))
    	{
    	hit.collider.SendMessageUpwards("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver);
		}
    	PlayerShooting.health -= 5;
		nextattack = Time.time + attackspeed;
    	}
    }
	}
    }
	//Zorgt dat dit object gewond raakt.
	function ApplyDamageEnemy(damage : float)
	{
		if(hitPoints <= 0.0)
		{
    	return;
    	}
    	hitPoints -= damage;
    	//Als de hitpoints minder of gelijk zijn aan 0.
    	if(hitPoints <= 0.0)
    	{
    	//Ga naar de functie DelayedDetonate.
    	Invoke("DelayedDetonate",2);
    	if(gameObject.GetComponent(AudioSource))
		{
    	audio.Play();
    	yield WaitForSeconds (audio.clip.length);
    	audio.Stop();
    	}
    	}
    }
    
	//Zorgt dat dit object vernietigd wordt.
	function DelayedDetonate()
	{
		var exp = Instantiate(explosion, gameObject.transform.position, Quaternion.identity);
		//Vernietig dit object.
		Destroy(gameObject);
	}