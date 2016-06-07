var walking : float;
var attacking : float;
var enemy : float;
var idle : float;
static var teleport : float;
var myAnimator : Animator;
var uiskin : GUISkin;

function Start ()
{
 walking = 1;
 FadeIn.fadeIn = true;
 PlayerShooting.Weapon_ID = 0;
}

function Update ()
{
	if (this.transform.position.z >= 21 && this.transform.position.z < 26 && enemy != 1)
	{
		walking = 0;
		attacking = 1;
	}
	
	if (this.transform.position.z >= 26 && this.transform.position.z < 53 && idle != 1)
	{
		attacking = 0;
		enemy = 1;
	}
	
	if (this.transform.position.z >= 53)
	{
		enemy = 0;
		idle = 1;
	}
	
	if (this.transform.position.z >= 210)
	{
		teleport = 1;
		Teleport();
		/*if(PlayerPrefs.GetInt("completed") < 2){
		PlayerPrefs.SetInt("completed", 2);
		}*/
		Application.LoadLevel("shoptestlevel");
	}
}

function Teleport()
{
	FadeOut.fadeOut = true;
	yield WaitForSeconds(3);
	FadeOut.fadeOut = false;
}

function OnGUI()
{
		GUI.skin = uiskin;
		
	if (walking == 1)
	{
		GUI.Button(Rect(Screen.width / 2 - 150,10,400,30), "Use the Q and D keys to move your character.");
		GUI.Button(Rect(Screen.width / 2 - 150,50,400,30), "Press the spacebar to jump.");
	}
	
	if (attacking == 1)
	{
		GUI.Button(Rect(Screen.width / 2 - 150,10,400,30), "Click the left mouse button to attack an enemy.");
		GUI.Button(Rect(Screen.width / 2 - 230,50,600,30), "Killing this enemy will give you a gun and the cell key, press e to open the cell.");
	}
	
	if (enemy == 1)
	{
		GUI.Button(Rect(Screen.width / 2 - 230,10,750,30), "To effectively defeat enemies you can hold Shift while walking backwards to look behind you.");
	}
}