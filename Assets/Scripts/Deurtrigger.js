var GUItest : float;
var exitdoor: Transform;
var nieuweSkin : GUISkin;

function OnTriggerEnter (color:Collider)
{
	GUItest = 1;
}

function OnGUI()
{
	GUI.skin = nieuweSkin;
	if (GUItest == 1)
	{
		GUI.Button(Rect(Screen.width / 2-100,40,200,30),"" + EnemyAIBoss2.hitPoints);
		if (EnemyAIBoss2.hitPoints <= 0)
		{
			GUItest = 0;
			exitdoor.renderer.enabled = false;
			exitdoor.collider.enabled = false;
		}
	}
}