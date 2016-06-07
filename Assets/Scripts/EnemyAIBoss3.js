    //Variabelen
    var player : Transform;
    var speed = 5.0;
    var chaseRange = 11.0;
    var dieRange = 1.7;
    var attackspeed : float = 2;
    var nextattack = 0.0;
    var Viewrange : float = 0;
    static var hitPoints = 5000.0;
    var damage : float;
    var hasdied : float = 0;
    var EnemyID : int;
    var bullet : GameObject;
	var spawnPoint : Transform;
    private var controller : CharacterController;
    var audio1: AudioSource;
	var audio2: AudioSource;
    var moneygeef : int;
    var nieuweSkin : GUISkin;
    //Doe dit wanneer script geactiveerd wordt.
    function Start()
    {
    //Controller voor de speler nemen.
    controller = GetComponent(CharacterController);
    var aSources = GetComponents(AudioSource);
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
    transform.position.y = 102.27;
    //De range is de afstand tussen de speler en dit object.
    if (GameObject.FindGameObjectWithTag("Player"))
    {
    var range = Vector3.Distance(player.position, transform.position);
    }
    if (hitPoints <= 0 && hasdied == 0)
    {
		hasdied = 1;
    }
    //Als de range kleiner is dan de range ingesteld als de melee range val dan de speler aan.
    if (range <= dieRange && hasdied == 0)
    {
    	//Als er 'attackspeed' seconden zijn gepasseerd dan kan dit object nog eens aanvallen.
    	if (Time.time > nextattack)
    	{
    	animation["attack01"].speed = 3;
    	animation.CrossFade("attack01", 0.2);
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
    	animation.CrossFade("run", 0.2);
    	//Rent naar de speler toe.
    	controller.Move(moveDirection * Time.deltaTime * speed);
    }
    else if (hasdied == 0)
    {
    	animation.Play("idle");
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
    	PlayerPrefs.SetInt("money int", PlayerPrefs.GetInt("money int") + moneygeef);
    	//Ga naar de functie DelayedDetonate.
    	Invoke("DelayedDetonate",2);
    	animation.CrossFade("death", 0.2);
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
		Credits.begin = 1;
		//Vernietig dit object.
		Destroy(gameObject);
	}
	
	function OnGUI()
	{
	
		GUI.skin = nieuweSkin;
		GUI.Button(Rect(Screen.width / 2-200,10,400,30),"" + EnemyAIBoss3.hitPoints);
	}