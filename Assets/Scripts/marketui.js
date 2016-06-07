var slapstickui : float = 0;
public static var startknop : int = 0;
var pewpewpewui : float = 0;
public static var hoverovershop1 : int;
var basemarketcube : Transform;

function Start () {

}


function OnMouseOver ()
{
    if ( Input.GetMouseButtonDown(0) == true)
    {
    startknop = 1;
    basemarketcube.transform.position.y = 40;
    }
}

function OnGUI ()	
{
if (startknop == 1) {
		GUI.BeginGroup(Rect(Screen.width/5,(Screen.height / 5 ), 1000, 1000));
		GUI.Box(Rect(0,0,300,400),"Wapens kopen");
		
		
		//upgrade buttens
		if(GUI.Button(Rect(20,50,190,30),"Bandage packs"))
		{
		slapstickui = 1;
		pewpewpewui = 0;
		//prefab.transform.position.y = 15;		
		}
		
		if(slapstickui == 1){
		GUI.Button(Rect(215,50,50,30),"buy");
		}
		
		
		if(GUI.Button(Rect(20,90,190,30),"Ammo"))
		{
		pewpewpewui = 1;
		slapstickui = 0;
		}
			
		//de exit butten
		if(GUI.Button(Rect(20,350,250,30),"EXIT"))
		{
		startknop = 0;
		slapstickui = 0;
		
		}
	
	

	//desc box spawn
	if (slapstickui == 1)
	{
	GUI.Box(Rect(320,300,300,100),"Description \n \n \n Deze kan je in levels gebruiken \n om jezelf te healen");
	}
	
	if (pewpewpewui == 1)
	{
	GUI.Box(Rect(320,300,300,100),"Description \n \n \n Hiermee kan je meer vijanden schieten \n yay");
	}
	
	
	
	
	
	GUI.EndGroup();
	}
	if (startknop == 0 )
	{
	 pewpewpewui = 0;
	 slapstickui = 0;
	 basemarketcube.transform.position.y = -500;
	}
	}


  function OnUpdate(){
}

