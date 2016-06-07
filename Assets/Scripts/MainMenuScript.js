var nieuweSkin : GUISkin;
var logoTexture : Texture2D;
var script : Component;
var script2 : Component;
var script3 : Component;

function Start()
{
	script = GetComponent("MainMenuScript");
	script2 = GetComponent("MapMenuScript");
	script3 = GetComponent("HelpMenuScript");
}

function eersteMenu()
{
	//Begin layout
	GUI.BeginGroup(Rect(Screen.width / 2 - 150,(Screen.height / 2 - 200),300,400));
	
	//Achtergrond menu
	GUI.Box(Rect(0,0,300,450), "");
	

	
	////Hoofdmenu knoppen
	//Nieuw spel starten knop
	if(GUI.Button(Rect(55,50,180,40), "New Game"))
	{
		Application.LoadLevel("Intro Story");
		FadeIn.fadeIn = true;
		PlayerPrefs.SetInt("max health", 100);
		PlayerPrefs.SetInt("money int", 0);
		PlayerPrefs.SetInt("shield int", 0);
		PlayerPrefs.SetInt("bandage int", 0);
		PlayerPrefs.SetInt("weapon damage", 20);
		PlayerPrefs.SetInt("completed", 0);
	}
	
	//Spel laden knop
	if(GUI.Button(Rect(55,110,180,40), "Load Game"))
	{
		script.enabled = false;
		
		script2.enabled = true;
	}
	
	//Help knop
	if(GUI.Button(Rect(55,170,180,40), "Help"))
	{
		script.enabled = false;

		script3.enabled = true;
	}
	
	//Spel sluiten knop
	if(GUI.Button(Rect(55,230,180,40), "Quit"))
	{
		Application.Quit();
	}
	
	//Einde layout
	GUI.EndGroup();
}

function OnGUI ()
{
	//Laden GUI Skin
	GUI.skin = nieuweSkin;
	
	//Uitvoeren eersteMenu functie
	eersteMenu();
}