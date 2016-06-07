var bandageui : float = 0;
public static var startknop3 : int = 0;
var ammoui : float = 0;
var basemarketcube : Transform;
var ammo : Transform;
var health :Transform;

function Start () {

}


function OnMouseOver ()
{
    if ( Input.GetMouseButtonDown(0) == true)
    {
    startknop3 = 1;
    basemarketcube.transform.position.y = 40;
    }
}

function OnGUI ()	
{
if (startknop3 == 1) {
		GUI.BeginGroup(Rect(Screen.width/5,(Screen.height / 5 ), 1000, 1000));
		//GUI.BeginGroup(Rect((Screen.width/5)+Screen.height/6,((Screen.height / 5)+Screen.height/20), 1000, 1000));
		GUI.Box(Rect(0,0,300,400),"Wapens kopen");
		
		
		//upgrade buttens
		if(GUI.Button(Rect(20,50,190,30),"Bandage packs"))
		{
		bandageui = 1;
		ammoui = 0;
		//prefab.transform.position.y = 15;		
		}
		
		if(bandageui == 1){
		//als je de knop klikt
			if(GUI.Button(Rect(215,50,50,30),"buy"))
			//als je genoeg geld hebt
				if(PlayerPrefs.GetInt("money int") >= 20){
				//bandage geven
					PlayerPrefs.SetInt("bandage int", PlayerPrefs.GetInt("bandage int") + 1);
				//geld nemen
					PlayerPrefs.SetInt("money int",PlayerPrefs.GetInt("money int") - 20);
					}
		}
		
		
		if(GUI.Button(Rect(20,90,190,30),"Ammo"))
		{
		ammoui = 1;
		bandageui = 0;
		}
		
		if(ammoui == 1){
		GUI.Button(Rect(215,90,50,30),"buy");
		}
		
				
		//de exit butten
		if(GUI.Button(Rect(20,350,250,30),"EXIT"))
		{
		startknop3 = 0;
		bandageui = 0;
		
		}
	
	

	//desc box spawn
	if(bandageui == 1)
	{
	GUI.Box(Rect(320,300,300,100),"Description \n \n Deze kan je in levels gebruiken \n om jezelf te healen \n 20 punten");
	}
	
	if(ammoui == 1)
	{
	GUI.Box(Rect(320,300,300,100),"Description \n \n Hiermee kan je meer vijanden schieten \n yay");
	}
	
	
	
	
	
	GUI.EndGroup();
	}
	if (startknop3 == 0 )
	{
	 bandageui = 0;
	 ammoui = 0;
	 basemarketcube.transform.position.y = -500;
	}
	}


  function Update(){
  if(ammoui == 1)
  {
  ammo.transform.position.y = 35;
  }
  else
  {
  ammo.transform.position.y = -30;
  }
  
  if(bandageui == 1)
  {
  health.transform.position.y = 35;
  }
  else
  {
  health.transform.position.y = -30;
  }
}

