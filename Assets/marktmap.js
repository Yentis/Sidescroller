var nieuweSkin : GUISkin;
var script : Component;
var script2 : Component;

function Awake()
{
	script = GetComponent("marktmap");
	script2 = GetComponent("mapmarktmenu");
}

function OnGUI ()
{
	GUI.skin = nieuweSkin;
	
	if(GUI.Button(Rect(Screen.width - 200, 20, 200, 30), "Level select"))
	{
	script.enabled = false;
	script2.enabled = true;
	}
	
}