var nieuweSkin : GUISkin;
var maptextureselect : Texture2D;
var mapTexture0 : Texture2D;
var mapTexture1 : Texture2D;
var mapTexture2 : Texture2D;
var mapTexture3 : Texture2D;
var mapTexture4 : Texture2D;
var menudingint : int;
var levelnaamding : String;
var levellaadding : int;
var levelding : int;
 function Start()
    {
    //zet menulvlint op 1
    PlayerPrefs.SetInt("menulvlint", 1);
    }
    
    
    
    
function hetMapMenu()
{

//Begin layout
GUI.BeginGroup(Rect(Screen.width / 2 - 200,Screen.height / 2 - 200,400,600));
	
		//GUI
		GUI.Box(Rect(0,0,400,450), "");
		//GUI.Box(Rect(96,20,200,200), "");
		GUI.Box(Rect(96,222,200,30), levelnaamding);
		//eind GUI

    		
    		//PREVIEWFOTO
			GUI.Label(Rect(100,40,198,198), maptextureselect);
			// EIND PREVIEWFOTO	
		
		
		
		//KNOP STARTLEVEL
		if(menudingint == 0)
	    {
	   if(GUI.Button(Rect(30,255,180,40), "Load level"))
			{
			Application.LoadLevel("shoptestlevel");
			}
	    }
	    
	    
	    
	      if(menudingint == 1)
	    {
	     if(GUI.Button(Rect(30,255,180,40), "Load level"))
			{
			Application.LoadLevel("Intro Story");
			}
	    }
	    
	    
	      if(menudingint == 2)
	    {
	     if(GUI.Button(Rect(30,255,180,40), "Load level"))
			{
			Application.LoadLevel("lvl2intro");
			}
	    }
	    
	    
	      if(menudingint == 3)
	    {
	     if(GUI.Button(Rect(30,255,180,40), "Load level"))
			{
			Application.LoadLevel("Level 3 Intro");
			}
	    }
	    
	      if(menudingint == 4)
	    {
	     if(GUI.Button(Rect(30,255,180,40), "Load level"))
			{
			Application.LoadLevel("Volcano");
			}
	    }
		//EIND KNOP STARTLEVEL
			
		//KNOP TRUG	
			//als knop gecklikt word
			if(GUI.Button(Rect(205,255,180,40), "Back"))
			{
				//zet het main menuscript aan
				var script = GetComponent("MainMenuScript");
				script.enabled = true;
				//zet he map menu script uit
				var script2 = GetComponent("MapMenuScript");
				script2.enabled = false;
			}
		//EIND KNOP TRUG
		
		//KNOPPEN LEVEL SELECT
		
		
			//KNOPPEN VOOR SELECTIE VAN LEVEL
				//als selectie op level 0 staat
				if(menudingint == 0)
						{
								//en je klikt op vorig level moet hij trug naar level 4
								if(GUI.Button(Rect(30,120,40,40), "<="))
										{
											//menulvlint op 4 zetten
											PlayerPrefs.SetInt("menulvlint", 4);
										}
								//als je op volgende klikt gewoon 1 bij menulvlint optellen
								else if(GUI.Button(Rect(330,120,40,40), "=>"))
										{
											//1 optellen bij menulvlint
											PlayerPrefs.SetInt("menulvlint", PlayerPrefs.GetInt("menulvlint") + 1);
										}
						}
					//anders als je selectie op level 4 staat
					else if(menudingint == 4)
						{
								//en je wilt trug gaan 
								if(GUI.Button(Rect(30,120,40,40), "<="))
									{
									//gewoon 1 aftrekken bij menulvlint
									PlayerPrefs.SetInt("menulvlint", PlayerPrefs.GetInt("menulvlint") - 1);
									}
								//anders als je wilt verdergaan selectie op 0 zetten
								else if(GUI.Button(Rect(330,120,40,40), "=>"))
									{
									PlayerPrefs.SetInt("menulvlint", 0);
									}
						}
					//als level selectie niet op 4 of 0 staat
					else
						{
								//en er word op vorige geklikt
								if(GUI.Button(Rect(30,120,40,40), "<="))
										{
										//1 aftrekken van menulvlint
										PlayerPrefs.SetInt("menulvlint", PlayerPrefs.GetInt("menulvlint") - 1);
										}
								//of als er op volgende geklikt word
								else if(GUI.Button(Rect(330,120,40,40), "=>"))
										{
										//1 optellen bij menulvlint
										PlayerPrefs.SetInt("menulvlint", PlayerPrefs.GetInt("menulvlint") + 1);
										}
						}
	
				
//Einde layout
GUI.EndGroup();



//EINDE FUNCTION HETMAPMENU
}

function OnGUI()
{
	//Laden GUI Skin
	GUI.skin = nieuweSkin;
	
	//Uitvoeren hetMapMenu functie
	hetMapMenu();
	
	
	
	

}

function Update()
{

checklevel();
    
}

function checklevel()
{

menudingint = PlayerPrefs.GetInt("menulvlint");



    if(menudingint == 0)
    {
    		//zet de label met level naam
    		levelnaamding = "Shop";
    		
    		//verander de foto die hij toont van de level
    		maptextureselect = mapTexture0;

    }
    
    
    
    
    if(menudingint == 1 )
    {
    		levelnaamding = "Level 1 : Prison";
    		
    		maptextureselect = mapTexture1;
    		
    		if(GUI.Button(Rect(15,255,180,40), "Start level"))
			{
				Application.LoadLevel(1);
			}
    }
    
    
    
    
    if(menudingint == 2)
    {
    		levelnaamding = "Level 2 : Forest";
    		
    		maptextureselect = mapTexture2;
    		
    		GUI.Button(Rect(0,0,100,100),"fqsd");
    		if(GUI.Button(Rect(15,255,180,40), "Start level"))
			{
				if(PlayerPrefs.GetInt("completed") > 1){
				Application.LoadLevel(2);
				}
			}
    }
    
    
    
    if(menudingint == 3)
    {
    		levelnaamding = "Level 3 : Abandoned spaceship";
    		
    		maptextureselect = mapTexture3;
    		
    			if(GUI.Button(Rect(15,255,180,40), "Start level"))
			{
				if(PlayerPrefs.GetInt("completed") > 2){
				Application.LoadLevel(3);
				}
			}
    }
    
    
    
    
    if(menudingint == 4)
    {
    		levelnaamding = "Level 4 : Destroyed planet";
    		
    		maptextureselect = mapTexture4;
    		
    		if(GUI.Button(Rect(15,255,180,40), "Start level"))
			{
				if(PlayerPrefs.GetInt("completed") > 3){
				Application.LoadLevel(4);
				}
			}
    }
    
}

