var deurding2014blazeit420 : float = 0;
static var Platform : float = 0;
var GUItest : float;
var nieuweSkin : GUISkin;


function OnTriggerEnter (color:Collider)
{
if(deurding2014blazeit420 == 0)
	{
	yield WaitForSeconds(0.5);
	if(gameObject.GetComponent(AudioSource))
	{
	audio.Play();
	}
	if(gameObject.GetComponent(Animation))
	{
	animation["SlidingDoorAnimation"].speed = -1;
	animation["SlidingDoorAnimation"].time = animation["SlidingDoorAnimation"].length;
	animation.Play("SlidingDoorAnimation");
	}
	deurding2014blazeit420 = 1;
	yield WaitForSeconds(1);
	Platform = 1;
	GUItest = 1;
	}
}

function OnGUI()
{
	GUI.skin = nieuweSkin;
	
	
	if (GUItest == 1 && gameObject.GetComponent(Animation))
	{
		GUI.Button(Rect(Screen.width / 2-100,40,200,30),"" + EnemyAIBoss1.hitPoints);
		if (EnemyAIBoss1.hitPoints <= 0)
		{
			GUItest = 0;
		}
	}
}