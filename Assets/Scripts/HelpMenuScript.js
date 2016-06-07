var nieuweSkin : GUISkin;

function hetHelpMenu()
{
	//Begin layout
	GUI.BeginGroup(Rect(Screen.width / 2 - 150,Screen.height/2 - 150,400,300));
	
	
	
	//achtergrond
	GUI.Box(Rect(0,0,300,300), "");
	
	
	//random labels voor de controls uit te leggen
	GUI.Label(Rect(60,10,400,300), "Q = left					D = right \n");
	GUI.Label(Rect(60,45,400,300), "				g  = heal");
	GUI.Label(Rect(60,65,400,300), "			space  = jump");
	GUI.Label(Rect(60,85,400,300), "Left mouse click  = shoot");
	GUI.Label(Rect(65,105,400,300), "E for special interactions");
	GUI.Label(Rect(55,125,400,300), "if needed wil be made clear");
	
	//als je op terug klikt
	if(GUI.Button(Rect(100,255,100,40), "Terug"))
		{
			//het main menu script aanzetten en help menu script uitzetten
			var script = GetComponent("MainMenuScript");
			script.enabled = true;
			var script2 = GetComponent("HelpMenuScript");
			script2.enabled = false;
		}
	//Einde layout
	GUI.EndGroup();
}

function OnGUI()
{
	//Laden GUI Skin
	GUI.skin = nieuweSkin;
	
	//Uitvoeren hetHelpMenu functie
	hetHelpMenu();
}