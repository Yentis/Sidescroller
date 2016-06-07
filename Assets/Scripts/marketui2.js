//voor de ui open te kunnen zetten
var weaponui : float = 0;
var healthui : float = 0;
var bandageui : float = 0;
var shieldui : float = 0;
var bandage : Transform;
var shield : Transform;
var nieuweSkin : GUISkin;
//om te kijken of er op de shop word geklikt word
public static var startknop2 : int = 0;
//zodat er iets achter de ui komt om het leesbaar te maken
var basemarketcube : Transform;
var spawn : Transform;
var weapon : Transform;
var health : Transform;


function OnMouseOver ()
{
	//als er op de shop word geklikt
    if ( Input.GetMouseButtonDown(0) == true)
	    {
		    //zorgt dat de ui aan gaat
		    startknop2 = 1;
		    //zet een cube achter de ui dat het leesbaar word
		    basemarketcube.transform.position.y = 40;
	    }
}

function OnGUI ()	
{
	GUI.skin = nieuweSkin;
//kijkt of er geklikt is
if (startknop2 == 1) {
		GUI.BeginGroup(Rect(Screen.width/4,(Screen.height / 4 ), 1000, 1000));
		GUI.Box(Rect(0,0,380,450),"");
		
		
		//upgrade buttons
		if(GUI.Button(Rect(20,50,190,30),"Weapon damage"))
		{
		weaponui = 1;
		healthui = 0;
		bandageui = 0;
		shieldui = 0;
		}
		

		
		
		if(GUI.Button(Rect(20,90,190,30),"Health upgrade"))
			{
			weaponui = 0;
			healthui = 1;
			bandageui = 0;
			shieldui = 0;
			}

		if(GUI.Button(Rect(20,130,190,30),"Bandage packs"))
			{
			weaponui = 0;
			healthui = 0;
			bandageui = 1;
			shieldui = 0;
			}
		
		if(GUI.Button(Rect(20,170,190,30),"Shield"))
			{
			weaponui = 0;
			healthui = 0;
			bandageui = 0;
			shieldui= 1;
			}
		
		
			
		//de exit butten
		if(GUI.Button(Rect(20,300,250,30),"EXIT"))
			{
			startknop2 = 0;
			
			weaponui = 0;
			healthui = 0;
			bandageui = 0;
			shieldui = 0;
			
			}
	
		//koop knoppen
		
		//als je op weapon upgrade knop klikt
		if(weaponui == 1)
			{
			weapon.transform.position.z = spawn.position.z;
			weapon.transform.position.y = spawn.position.y;
			weapon.transform.position.x = spawn.position.x;
				//als je op buy knop klikt
				if(GUI.Button(Rect(220,50,40,30),"buy"))
				{
						//kijkt of je genoeg geld hebt
						if(PlayerPrefs.GetInt("money int") >= 150)
						{
						//neemt het geld dat je hebt en geeft je wat je gekocht hebt
						PlayerPrefs.SetInt("money int",PlayerPrefs.GetInt("money int") - 150);
						PlayerPrefs.SetInt("weapon damage", PlayerPrefs.GetInt("weapon damage") + 5);
						}
				}
			}
			else
			{
			weapon.transform.position.y = -50;
			}
		
		//als je op health upgrade knop klikt
		if(healthui == 1)
			{
			health.transform.position.z = spawn.position.z;
			health.transform.position.y = spawn.position.y;
			health.transform.position.x = spawn.position.x;
				//als je op buy knop klikt
				if(GUI.Button(Rect(220,90,40,30),"buy"))
				{
						//kijkt of je genoeg geld hebt
						if(PlayerPrefs.GetInt("money int") >= 150)
						{
						//neemt het geld dat je hebt en geeft je wat je gekocht hebt
						PlayerPrefs.SetInt("money int",PlayerPrefs.GetInt("money int") - 150);
						PlayerPrefs.SetInt("max health",PlayerPrefs.GetInt("max health") + 20);
						}
				}
			}
			else
			{
			health.transform.position.y = -50;
			}
			
		//als je op bandage knop klikt
		if(bandageui == 1)
			{
			bandage.transform.position.z = spawn.position.z;
			bandage.transform.position.y = spawn.position.y;
			bandage.transform.position.x = spawn.position.x;
				//als je op buy knop klikt
				if(GUI.Button(Rect(220,130,40,30),"buy"))
				{
						//kijkt of je genoeg geld hebt
						if(PlayerPrefs.GetInt("money int") >= 50)
						{
						//neemt het geld dat je hebt en geeft je wat je gekocht hebt
						PlayerPrefs.SetInt("money int",PlayerPrefs.GetInt("money int") - 50);
						PlayerPrefs.SetInt("bandage int",PlayerPrefs.GetInt("bandage int") + 1);
						}
				}
			}
			else
			{
			bandage.transform.position.y = -50;
			}
		//als je op shield upgrade knop klikt
		if(shieldui == 1)
			{
			shield.transform.position.z = spawn.position.z;
			shield.transform.position.y = spawn.position.y;
			shield.transform.position.x = spawn.position.x;
				//als je op buy knop klikt
				if(GUI.Button(Rect(220,170,40,30),"buy"))
				{
						//kijkt of je genoeg geld hebt
						if(PlayerPrefs.GetInt("money int") >= 200)
						{
						//neemt het geld dat je hebt en geeft je wat je gekocht hebt
						PlayerPrefs.SetInt("money int",PlayerPrefs.GetInt("money int") -200);
						PlayerPrefs.SetInt("shield int",PlayerPrefs.GetInt("shield int") + 5);
						}
				}
			}
			else
			{
			shield.transform.position.y = -50;
			}
		

	//desc Button spawn
	//als weaponui 1 is (door op de weapon upgrade knop te klikken)
	if (weaponui == 1)
		{
			GUI.Button(Rect(320,300,300,100),"Description \n Increases gun damage by 5 \n 150 points \n Current gun damage: " + PlayerPrefs.GetInt("weapon damage").ToString());
		}
	
	if (healthui == 1)
		{
			GUI.Button(Rect(320,300,300,100),"Description \n Increases maximum health by 20 \n 150 points");
		}
	
	if (bandageui == 1)
		{
			GUI.Button(Rect(320,300,300,100),"Description \n A bandage pack that heals 1/4th \n of your maximum health \n 50 points ");
		}
	
	if (shieldui == 1)
		{
			GUI.Button(Rect(320,300,300,100),"Description \n Increases your shield by 5 \n(shield regenerates) \n 200 points");
		}
	
	
	
	
	
	GUI.EndGroup();
	}
	if (startknop2 == 0 )
	{
	 basemarketcube.transform.position.y = -500;
	}
	}


  function OnUpdate(){
}

