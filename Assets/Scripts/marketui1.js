var health : float = 0;
public static var startknop1 : int = 0;
var shield : float = 0;
var basemarketcube : Transform;
var maxhealth :Transform;
function Start () {

}


function OnMouseOver ()
{
    if ( Input.GetMouseButtonDown(0) == true)
    {
    startknop1 = 1;
    basemarketcube.transform.position.y = 40;
    }
}

function OnGUI ()	
{
if (startknop1 == 1) {
		GUI.BeginGroup(Rect(Screen.width/5,(Screen.height / 5 ), 1000, 1000));
		GUI.Box(Rect(0,0,300,400),"Wapens kopen");
		
		
		//upgrade buttens
		if(GUI.Button(Rect(20,50,190,30),"Health"))
		{
		health = 1;
		shield = 0;
		//prefab.transform.position.y = 15;		
		}
		
		if(health == 1){
		GUI.Button(Rect(220,50,40,30),"buy");
		}
		
		
		if(GUI.Button(Rect(20,90,190,30),"SHIELD"))
		{
		shield = 1;
		health = 0;
		}
		
		if(shield == 1){
		if(GUI.Button(Rect(220,90,40,30),"buy"))
			if(PlayerPrefs.GetInt("money int") >= 150)
			{
			PlayerPrefs.SetInt("max health",PlayerPrefs.GetInt("max health") + 20);
			}
		}
			
		//de exit butten
		if(GUI.Button(Rect(20,350,250,30),"EXIT"))
		{
		startknop1 = 0;		
		}
	
	

	//desc box spawn
	if (health == 1)
	{
	GUI.Box(Rect(320,300,300,100),"Description \n \n Hiermee verhoog je je maximale health met 20\n 150");
	
	}
	
	if (shield == 1)
	{
	GUI.Box(Rect(320,300,300,100),"Description \n \n  Dit schild regenerate zijn eigen \n en neemt damage op");
	}
	
	
	
	
	
	GUI.EndGroup();
	}
	if (startknop1 == 0 )
	{
	 shield = 0;
	 health = 0;
	 basemarketcube.transform.position.y = -500;
	}
	}


  function Update(){
  if(health == 1)
  {
  maxhealth.transform.position.y = 35;
  }
  else
  {
  maxhealth.transform.position.y = -30;
  }
  }
