var bullet : GameObject;
var spawnPoint : Transform;
static var damage : float = 10;
static var health : float = 100.0;
static var Weapon_ID : float = 0;
var myAnimator : Animator;
static var Attack : float = 0;
var Movement : float;
var player : Transform;
var hasdied : float;
static var disablemovement : float;
var audio1: AudioSource;
var audio2: AudioSource;
var shooting : float;
var nieuweSkin: GUISkin;



function Awake ()
{
  if (Application.loadedLevel != "Level 1")
		{
			Weapon_ID = 1;
		}
}


function Start()
{
	FadeOut.fadeOut = false;
	var aSources = GetComponents(AudioSource);
    audio1 = aSources[0];
    audio2 = aSources[1];
}

function Update ()
{
//bandage gebruiken
if(health < PlayerPrefs.GetInt("max health"))
{
		if(Input.GetKeyDown(KeyCode.H))
			{
				if(PlayerPrefs.GetInt("bandage int") > 0)
				{
				Debug.Log("used");
				PlayerPrefs.SetInt("bandage int", PlayerPrefs.GetInt("bandage int") - 1);
				health = health + PlayerPrefs.GetInt("max health") / 4;
				}
			}
}
//end

//als health hoger is dan max health
if(health > PlayerPrefs.GetInt("max health"))
	{
	//zet health op max health
	health = PlayerPrefs.GetInt("max health");
	}	
//end	



if (health <= 0 && hasdied == 0)
    {
		myAnimator.SetInteger("Hitpoints", health);
		hasdied = 1;
		disablemovement = 1;
    }
if (Weapon_ID == 1)
	{
		myAnimator.SetFloat("Weapon_ID", Weapon_ID);
		if(Input.GetButtonDown("Fire1"))
		{
    	FireOneShot();
    	}
    } 
if (Weapon_ID == 0)
    {
    	myAnimator.SetFloat("Weapon_ID", Weapon_ID);
    	if(Input.GetButtonDown("Fire1"))
    	{
    	Punch();
    	}
    	Movement = myAnimator.GetFloat("Movement");
    
    	if (Movement == 1)
			{
				Attack = 0;	
				myAnimator.SetFloat("Attack", Attack);
			}
    }
   
}
    
function FireOneShot()
{
if (PlayerShooting.health > 0)
{
	if (shooting == 0)
	{
	audio2.Play();
	shooting = 1;
	yield WaitForSeconds(0.2);
	shooting = 0;
	}
	var nBullet = Instantiate(bullet, spawnPoint.position -Vector3(0,-1,0), spawnPoint.rotation);
    nBullet.rigidbody.velocity = spawnPoint.TransformDirection(Vector3(0,0,110));
    var direction = spawnPoint.TransformDirection(Vector3(0,0,110));
    var hit : RaycastHit;
    var localOffset = spawnPoint.position + (transform.up);
    Debug.DrawRay(localOffset, (direction/* + Vector3(0,0,10)*/) * 300, Color.green, 2);
    if (Physics.Raycast (localOffset, direction, hit, 300))
    {
    damage = PlayerPrefs.GetInt("weapon damage");
    hit.collider.SendMessageUpwards("ApplyDamageEnemy", damage, SendMessageOptions.DontRequireReceiver);
	}
}
}

function Punch()
{
	Attack = 1;
	
	if (myAnimator == null)
    {
	Debug.LogError("Animator is null!");
	}
	else
	{
	myAnimator.SetFloat("Attack", Attack);
	}
	
	var raycastDist : float = 3;
	var hit : RaycastHit;
	
	yield WaitForSeconds(1);
	Debug.DrawRay(spawnPoint.position, (spawnPoint.forward + Vector3(0,0,10)) * raycastDist, Color.green, 2);
	if(Physics.Raycast(spawnPoint.position, spawnPoint.forward + Vector3(0,0,10), hit, raycastDist))
	{
		if (hit.rigidbody.gameObject.tag == "Enemy" || hit.collider.gameObject.tag == "Event")
		{
		damage = 100;
		hit.rigidbody.SendMessageUpwards("ApplyDamageEnemy", damage, SendMessageOptions.DontRequireReceiver);
		AttackTrigger.dooropen = 1;
		}
	}
	
	yield WaitForSeconds(1);
	
	Attack = 0;
	
	if (myAnimator == null)
    {
	Debug.LogError("Animator is null!");
	}
	else
	{
	myAnimator.SetFloat("Attack", Attack);
	}
}

function OnGUI()
{
	GUI.skin = nieuweSkin;
	GUI.Button(Rect(10,10,100,30),"" + health);
	
	if (health <= 0)
		{
		GUI.BeginGroup(Rect(Screen.width / 2 - 150,(Screen.height / 2 - 200),300,400));
		GUI.Box(Rect(0,0,300,400), "YOU DIED!");
			if(GUI.Button(Rect(55,100,180,40), "Main Menu"))
			{
			var script = GetComponent("MainMenuScript");
			Application.LoadLevel("Main Menu");
			health = 100;
			disablemovement = 0;
			}
			if(GUI.Button(Rect(55,200,180,40), "Quit"))
			{
			Application.Quit();
			}
		GUI.EndGroup();
		}
}

function ApplyDamage(damage : float)
	{
		if(health <= 0.0)
		{
    	return;
    	}
    	health -= damage;
    	//Als de hitpoints minder of gelijk zijn aan 0.
    	if(health <= 0.0)
    	{
    	//Ga naar de functie DelayedDetonate.
    	Invoke("DelayedDetonate",2);
    	}
    }
    
function DelayedDetonate()
	{
		//Vernietig dit object.
		Destroy(gameObject);
	}