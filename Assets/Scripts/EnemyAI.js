    //Variabelen
    var player : Transform;
    var myAnimator : Animator;
    var speed = 5.0;
    var chaseRange = 11.0;
    var dieRange = 1.7;
    var attackspeed : float = 2;
    var nextattack = 0.0;
    var Viewrange : float = 0;
    var hitPoints = 100.0;
    var damage : float;
    var hasdied : float = 0;
    var EnemyID : int;
    var bullet : GameObject;
	var spawnPoint : Transform;
    private var controller : CharacterController;
    var moneygeef : int;
    //Doe dit wanneer script geactiveerd wordt (zelfs als die niet geactiveerd is).
    function Awake()
    {
    if(moneygeef == 0){
    moneygeef = 20;
    }
    //Animator nemen van het object dat dit script aan geattached is.
	myAnimator = GetComponent(Animator);
	if (this.CompareTag("Enemy"))
    {
    EnemyID = 1;
    }
    if (this.CompareTag("Melee"))
    {
    EnemyID = 2;
    }
    if (this.CompareTag("Armed"))
    {
    EnemyID = 3;
    }
	}
    
    //Doe dit wanneer script geactiveerd wordt.
    function Start()
    {
    //Controller voor de speler nemen.
    controller = GetComponent(CharacterController);
    }
    
    //Doe dit elke frame
    function Update()
    {
	 //Zorgen dat dit object enkel in de Z-axis kan bewegen.
    transform.position.x = 0;
    transform.rotation.x = 0;
    //De range is de afstand tussen de speler en dit object.
    if (GameObject.FindGameObjectWithTag("Player"))
    {
    var range = Vector3.Distance(player.position, transform.position);
    }
    if (hitPoints <= 0 && hasdied == 0)
    {
    	if (myAnimator == null)
    	{
		Debug.LogError("Animator is null!");
		}
		else
		{
		myAnimator.SetInteger("Hitpoints", hitPoints);
		}
		hasdied = 1;
    }
if (EnemyID == 1)
{
    range = 50;
	myAnimator.SetFloat("Viewrange", range);
}
if (EnemyID == 2)
{
    //Als de range kleiner is dan de range ingesteld als de melee range val dan de speler aan.
    if (range <= dieRange && hasdied == 0)
    {
    	//Als er 'attackspeed' seconden zijn gepasseerd dan kan dit object nog eens aanvallen.
    	if (Time.time > nextattack)
    	{
    	//De hoeveelheid damage dat het object doet.
		PlayerShooting.health -= 20;
		//Next attack is de tijd die gepasseerd is plus de aanvalssnelheid van het object.
		nextattack = Time.time + attackspeed;
    	}
    }
    //Als de range kleiner is dan de range ingesteld als de range van waar het object je kan zien.
    else if (range <= chaseRange && hasdied == 0)
    {
    	//Berekent de positie van de speler en kijkt niet omhoog of omlaag.
   		var targetPosition : Vector3 = new Vector3(player.position.x,this.transform.position.y,player.position.z);
   		//Bekijkt de speler.
    	this.transform.LookAt(targetPosition);
    	//Berekent in welke richting het object moet rennen.
    	var moveDirection : Vector3 = transform.TransformDirection(Vector3.forward);
    	//Rent naar de speler toe.
    	controller.Move(moveDirection * Time.deltaTime * speed);

    }
	//Zend de viewrange naar de animator om die te verwerken.
	myAnimator.SetFloat("Viewrange", range);
}
if (EnemyID == 3)
{	
	if (PlayerShooting.health < 1)
	{
	range = 50;
	myAnimator.SetFloat("Viewrange", range);
	}
	else
	{
	attackspeed = 0.5;
	if (range <= 8 && hasdied == 0)
    {
    	if (Time.time > nextattack)
    	{
    	var nBullet = Instantiate(bullet, spawnPoint.position -Vector3(0,0,0), spawnPoint.rotation);
    	nBullet.rigidbody.velocity = spawnPoint.TransformDirection(Vector3(0,0,-110));
    	var direction = spawnPoint.TransformDirection(Vector3(0,0,-110));
    	var hit : RaycastHit;
    	var localOffset = spawnPoint.position + (transform.up);
    	if (Physics.Raycast (localOffset, direction + Vector3(0,0,10), hit, 300))
    	{
    	hit.collider.SendMessageUpwards("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver);
		}
    	PlayerShooting.health -= 5;
		nextattack = Time.time + attackspeed;
    	}
    }
	else if (range <= chaseRange && range > 8 && hasdied == 0)
	{
		targetPosition = new Vector3(player.position.x,this.transform.position.y,player.position.z);
    	this.transform.LookAt(targetPosition);
    	moveDirection = transform.TransformDirection(Vector3.forward);
    	controller.Move(moveDirection * Time.deltaTime * speed);
    }	
	myAnimator.SetFloat("Viewrange", range);
	}
}
    }
	
	//Zorgt dat dit object gewond raakt.
	
	function ApplyDamageEnemy(damage : float)
	{
		if(hitPoints <= 0.0)
		{
    	return;
    	PlayerPrefs.SetInt("money int",PlayerPrefs.GetInt("money int") + moneygeef);
    	}
    	hitPoints -= damage;
    	//Als de hitpoints minder of gelijk zijn aan 0.
    	if(hitPoints <= 0.0)
    	{
    	PlayerPrefs.SetInt("money int", PlayerPrefs.GetInt("money int") + moneygeef);
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
		//Vernietig dit object.
		Destroy(gameObject);
	}